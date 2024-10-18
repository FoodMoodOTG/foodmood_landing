import React, { useEffect, useState } from 'react';
import Animate from "@/components/Animate";
import classes from './AboutUs.module.css';
import AnimateText from "@/components/AnimateText";
import StarIcon from "@/app/icons/StarIcon";
import useMediaQuery from "@/hooks/useMediaQuery";

function Avatar ({reviews, fadeClass, activeIndex}){
  return (
    <div className={`${classes.avatarWrp} ${fadeClass}`}>
      <div className={classes.avatar}>
        {reviews[activeIndex].image && (
          <img src={reviews[activeIndex].image} className={classes.avatarImage} alt=""/>
        )}
      </div>

      <div className={classes.avatarText}>
        {reviews[activeIndex].name.split(' ')[0]}
        <br/>
        {reviews[activeIndex].name.split(' ')[1]}
      </div>
    </div>
  )
}

function AboutUs(props) {
  const isMob = useMediaQuery(false, '(max-width: 1000px)');

  const reviews = [
    {
      review: 5,
      image: '/images/avatar.png',
      text: 'I recently had the pleasure of using the Food Mood platform, and it has significantly enhanced my dining experience. As someone who enjoys trying new restaurants and dishes, Food Mood has become an invaluable tool for discovering local eateries and managing my dining preferences.',
      name: 'Alexandra COOK'
    },
    {
      review: 4,
      image: null,
      text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
      name: 'Name HR'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(classes.fadeEnter);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(classes.fadeEnter); // Перед сменой отзыва добавляем класс для анимации

      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setFadeClass(classes.fadeEnterActive); // Активируем анимацию
      }, 100); // Добавляем небольшую задержку для плавности анимации
    }, 5000); // Смена отзыва каждые 5 секунд

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [reviews.length]);

  return (
    <div
      className={classes.about}
      style={{background: "url('/images/bgGradiend.jpg') center/cover no-repeat"}}
    >
      <div className="container">
        <Animate className={'title text-center'}>
          What our <span className={"font2"}>dear customers</span> {isMob && <br />} say about us.
        </Animate>


        {isMob && (
          <Avatar reviews={reviews}  activeIndex={activeIndex} fadeClass={fadeClass}/>
        )}
        <div className={`${classes.stars} ${fadeClass}`}>
          {Array(reviews[activeIndex].review).fill(0).map((_, i) => (
            <StarIcon key={i}/>
          ))}
        </div>
        <div
          className={`${classes.text} ${fadeClass}`}>
          {reviews[activeIndex].text}
        </div>

        {!isMob && (
          <Avatar reviews={reviews} activeIndex={activeIndex} fadeClass={fadeClass}/>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
