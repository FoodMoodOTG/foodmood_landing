import React, {useRef, useEffect} from 'react';
import Header from "@/blocks/Header/Header";
import classes from './Main.module.css';
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageWithFallback from "@/components/ImageWithFallback";
import Edited from "@/app/Editor/components/Edited";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Main(props) {
  const isMob = useMediaQuery(false, '(max-width: 1000px)');
  const mainImageWrapper = useRef(null);
  const mainImage = useRef(null);
  const main = useRef(null)

  useEffect(() => {
    const image = mainImage.current;
    const mainC = main.current;

    if(isMob){
      return
    }

    gsap.fromTo(
      image,
      { y: 0 }, // Начальное состояние: изображение на своем месте
      {
        y: isMob ? -500 : -800, // Конечное состояние: изображение смещено вверх на 800px
        ease: "none",
        scrollTrigger: {
          trigger: mainC,
          start: "top top",  // Старт анимации, когда элемент попадает в нижнюю часть экрана
          end: "bottom top",    // Конец анимации, когда элемент выходит за верхнюю часть экрана
          scrub: true,          // Делает анимацию плавной, связанной с прокруткой
        },
      }
    );

    return () => {
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Удаляем триггеры при размонтировании компонента
    };
  }, [isMob]);

  return (
    <div className={classes.main} ref={main}>
      <ImageWithFallback src={'/images/homeMain.jpg'} className={classes.bgImage} />
      <div style={{position: 'relative', zIndex: 10}} className={classes.mainWrp}>
        <Header />
        <div className={'container ' + classes.box}>
          <div className={classes.wrp}>
            {isMob && (
              <div className={classes.bubbles}>
                <div className={classes.bubble}>The future of digital</div>
                <div className={classes.bubble}>menus and payment</div>
              </div>
            )}
            <div className={classes.textBox}>
              {!isMob && (
                <>
                  <div className={classes.title}>
                    <Edited id={1} type={"text"} />
                  </div>
                  <div className={classes.text}>
                    <Edited id={2} type={"text"} />
                  </div>
                </>
              )}
            </div>

            <Edited src={'/images/mainImage.png'} type={'image'}>
              <div ref={mainImageWrapper} className={classes.mainImgWrapper}>
                <img ref={mainImage} src={'/images/mainImage.jpg'} className={classes.mainImg} />
              </div>
            </Edited>
          </div>

          {!isMob
            ? <img src={'/images/h1.svg'} className={classes.img} />
            : <img src={'/images/foodMood_mob.svg'} className={classes.img} />
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
