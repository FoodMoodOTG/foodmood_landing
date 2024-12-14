import React, { useEffect, useRef } from 'react';
import classes from './Steps.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from "@/components/AnimateText";
import Animate from "@/components/Animate";
import LinkIcon from "@/app/icons/LinkIcon";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

function Steps() {
  const phoneRefs = useRef([]);
  const isMob = useMediaQuery(false, '(max-width: 1100px)');

  useEffect(() => {
    const desc = window.innerWidth > 700
    if(desc){
      phoneRefs.current.forEach((phoneEl, index) => {
        gsap.fromTo(
          phoneEl,
          {
            opacity: 0,
            y: 100,         // Начальная позиция (ниже)
            rotateY: 140,   // Начальное вращение
            scale: 0.4,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,           // Конечная позиция (в исходное положение)
            rotateY: 0,     // Конечное вращение
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: phoneEl,    // Триггер на конкретный элемент
              start: 'top 80%',    // Когда элемент попадает в 80% высоты экрана
              end: 'top 50%',      // Анимация завершится на 50% высоты экрана
              scrub: 1,            // Анимация синхронизируется со скроллом
            },
            delay: index * 0.2,    // Задержка для каждого следующего телефона
          }
        );
      });
    }
  }, [isMob]);

  // Функция для рендера картинок
  const renderPhones = () => {
    const phones = [
      {
        imgSrc: '/images/phone1.png',
        boxSrc: '/images/phoneBox1.png',
        alt: 'Phone 1',
        title: 'Create account',
        text: 'You might also receive a welcome email with additional instructions.',
      },
      {
        imgSrc: '/images/phone2.png',
        boxSrc: '/images/phoneBox2.png',
        alt: 'Phone 2',
        title: 'Customize',
        text: 'Upload dishes, description, setting prices, tracking orders, analytics viewing.',
      },
      {
        imgSrc: '/images/phone3.png',
        boxSrc: '/images/phoneBox3.png',
        alt: 'Phone 3',
        title: 'Launch & Enjoy',
        text: 'Placing QR codes on tables, in social networks, and on the website.',
      },
    ];
  
    return phones.map((phone, index) => (
      <div className={classes.phoneWrp} key={index}>
        <div ref={(el) => (phoneRefs.current[index] = el)}>
          <ImageWithFallback
            src={phone.imgSrc}
            className={classes.phoneLayer}
            alt={phone.alt}
          />
        </div>
  
        <ImageWithFallback
          src={phone.boxSrc}
          className={classes.phoneBox}
          alt={`${phone.alt} Box`}
        />
        
        {/* Adding title and text below each image */}
        <div className={classes.phoneText}>
          <Animate className={`${classes.index} font2`}>0{index + 1}.</Animate>
          <h3 className={classes.subtitle}>
            <AnimateText text={phone.title} />
          </h3>
          <div className={classes.txt}>
            <AnimateText text={phone.text} />
          </div>
          {isMob && (
            <div style={{ marginTop: '10px' }}>
              <Animate className="btn btn-black-outline mx-auto">
                <span>Get started</span>
                <LinkIcon />
              </Animate>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className={'container ' + classes.steps}>
      <Animate className={"title text-center"}>
        Just <span className={'underline'}>3 steps </span> {isMob && <br/>} to <span className={"font2"}>get started</span> in minutes.
      </Animate>

      <div className={classes.wrp}>
        {renderPhones()}
      </div>
      {!isMob && (
        <Animate className={'btn btn-black-outline mt-[50px] mx-auto'}>
          <span>Get started</span>
          <LinkIcon/>
        </Animate>
      )}

    </div>
  );
}
export default Steps;
