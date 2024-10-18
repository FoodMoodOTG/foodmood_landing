import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import classes from './Form.module.css';
import AnimateText from "@/components/AnimateText";
import Input from "@/components/Input/Input";
import LinkIcon from "@/app/icons/LinkIcon";
import Animate from "@/components/Animate";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageWithFallback from "@/components/ImageWithFallback";
import clsx from "clsx";

// Подключаем ScrollTrigger к GSAP
gsap.registerPlugin(ScrollTrigger);

const token = '7924973883:AAFp4mkPkIeWmjQ_WR4CkcyzFFA-dC3zPU4'
const chatId = "-1002370246669"

// Определяем схему валидации с использованием zod
const schema = z.object({
  name: z.string().min(2, {message: 'Name must be at least 2 characters'}),
  email: z.string().email({message: 'Invalid email address'}),
  restaurant: z.string().min(2, {message: 'Restaurant name must be at least 2 characters'}),
  address: z.string().min(2, {message: 'Address name must be at least 2 characters'}),
  phone: z.string().regex(/^\+?\d{10,14}$/, {message: 'Invalid phone number'}), // Пример валидации для телефона
});

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({
    resolver: zodResolver(schema),
  });
  const isMob = useMediaQuery(false, '(max-width: 1000px)');
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState('error');

  // Создаем реф для изображения телефона
  const phoneImgRef = useRef(null);

  useEffect(() => {
    if(isMob){
      return
    }

    // Инициализируем GSAP анимацию
    gsap.fromTo(phoneImgRef.current,
      {opacity: 0, y: 100, rotateY: 140, scale: 0.4}, // начальное состояние
      {
        opacity: 1,
        y: 0,
        rotateY: 0, // вращение на 360 градусов
        duration: 2, // продолжительность анимации
        scale: 1,
        scrollTrigger: {
          trigger: phoneImgRef.current, // элемент, для которого срабатывает триггер
          start: 'top 90%', // старт анимации (когда 80% элемента достигнет вьюпорта)
          end: 'top 48%', // конец анимации (когда 20% элемента выйдет из вьюпорта)
          scrub: true, // плавная анимация при скролле
        }
      });
  }, []);

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    console.log('Form data:', data);
    setLoading(true);

    const setError = () => {
      setStatusMessage('error');
      setIsShowMessage(true);
      setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
    };

    const setSuccess = () => {
      setStatusMessage('success');
      setIsShowMessage(true);
      // setTimeout(() => {
      //   window.location.href = '/thanks.html'
      // }, 1000)
      setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
    };

    try {
      const message = `Name: ${data.name}\nPhone: ${data.phone}\nAddress: ${data.address}\nRestaurant: ${data.restaurant}\nEmail: ${data.email}`;
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });

      if (res.status !== 200) {
        setError();
        return;
      }
      setSuccess();
    } catch (err) {
      setError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container text-black">
      <div className={classes.main}>
        <div className={classes.wrp}>
          <div>
            <AnimateText className={classes.title}>
              <span>Start with </span><br/>
              <span>Food Mood</span> <span>today</span>
            </AnimateText>
            <AnimateText className={classes.text}
                         text={'Tell us what task you are facing right now, and we will offer a detailed plan for solving it and implement.'}/>

            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <Animate>
                <Input
                  id="name"
                  register={register('name')}
                  error={errors.name}
                  placeholder="Name"
                />
              </Animate>
              <Animate>
                <Input
                  id="email"
                  type="email"
                  register={register('email')}
                  error={errors.email}
                  placeholder="Email"
                />
              </Animate>
              <Animate>
                <Input
                  id="restaurant"
                  register={register('restaurant')}
                  error={errors.restaurant}
                  placeholder="Restaurant"
                />
              </Animate>
              <Animate>
                <Input
                  id="AddressRestaurant"
                  register={register('address')}
                  error={errors.address}
                  placeholder="Address restaurant"
                />
              </Animate>
              <Animate>
                <Input
                  id="phone"
                  register={register('phone')}
                  error={errors.phone}
                  placeholder="Phone"
                />
              </Animate>


              <Animate>
                <button type="submit" className={'btn btn-yellow ' + classes.btn} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send a request'}
                  <LinkIcon/>
                </button>
              </Animate>
            </form>
          </div>
          <div>
            {!isMob && (
              <div ref={phoneImgRef}>
                <ImageWithFallback
                  src="/images/iphonesForm.png"
                  alt="iPhones"
                  className={classes.phoneImg} // Можно добавить стили по необходимости
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={clsx(
            'message',
            {
              'show': isShowMessage,
              'shadow-custom-green bg-green': statusMessage === 'success',
              'bg-red': statusMessage === 'error',
            }
          )}
        >
          {statusMessage === 'success' ? 'Sent successfully' : 'Server Error'}
        </div>
      </div>
    </div>
  );
}

export default Form;
