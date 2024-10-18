import React, {useEffect, useRef} from 'react';
import classes from './AdminPanel.module.css';
import AnimateText from "@/components/AnimateText";
import Animate from "@/components/Animate";
import gsap from "gsap";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageWithFallback from "@/components/ImageWithFallback";

function AdminPanel(props) {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const dot = useRef(null)
  const isMob = useMediaQuery(false, '(max-width: 1000px)');

  useEffect(() => {
    if(isMob){
      return
    }

    const ref1C = ref1.current;
    const ref2C = ref2.current;
    const dotC = dot.current;

    // Настройка анимации с использованием ScrollTrigger
    gsap.fromTo(
      ref1C,
      {
        opacity: 0,
        y: 25, // Начальное смещение вниз
      },
      {
        opacity: 1,
        y: 0,  // Возвращаем в исходное положение
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref1C,  // Триггер анимации (наш текст)
          start: 'top 85%',         // Когда верх элемента достигает 80% экрана
          end: 'top 55%',           // Завершение анимации
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      dotC,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dotC,  // Триггер анимации (наш текст)
          start: 'top 75%',         // Когда верх элемента достигает 80% экрана
          end: 'top 45%',           // Завершение анимации
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ref2C,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref2C,  // Триггер анимации (наш текст)
          start: 'top 54%',         // Когда верх элемента достигает 80% экрана
          end: 'top 24%',           // Завершение анимации
          scrub: 1,
        },
      }
    );
  }, []);


  return (
    <div className={'container'}>
      {isMob && (
        <AnimateText className="mainTitle text-center" text={'Admin panel.'}></AnimateText>
      )}
      <div className={classes.box}>
        <div>
          {!isMob && (
            <AnimateText className="mainTitle" text={'Admin panel.'}></AnimateText>
          )}
          <AnimateText
            className={classes.text}
            text={'Our intuitive admin panel gives you full control — update your menu, manage delivery, and access customer info effortlessly. Everything you need to run your restaurant, all in one place!'}></AnimateText>
        </div>
        <div className={classes.images}>
          <div className={classes.image}  >
            <div ref={ref1}>
              <ImageWithFallback  src="/images/adPanel_1.png" alt=""/>
            </div>
          </div>
          <div className={classes.image} >
            <div ref={ref2} >
              <ImageWithFallback src="/images/adPanel_2.png" alt=""/>
            </div>
          </div>
          <div className={classes.txt} ref={dot}>Admin</div>
        </div>
      </div>
      {!
        isMob && (
        <Animate className={classes.subtitle + ' subtitle'}>
          Everything <span className={'underline'}>you need</span> to run your restaurant, all in <span className={'tag'}>one place!</span>
        </Animate>
      )}

    </div>
  );
}

export default AdminPanel;