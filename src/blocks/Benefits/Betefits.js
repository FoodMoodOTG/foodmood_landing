import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Animate from "@/components/Animate";
import classes from './Betefits.module.css';
import PercentageBadge from "@/components/Tag/PercentageBadge";

function Betefits(props) {
  const benefits = [
    {
      title: "Improved Customer Experience",
      description: "Simplify the ordering and payment process.",
    },
    {
      title: "Increased Efficiency",
      description: "Optimization of operations and reduction of waiting time.",
    },
    {
      title: "Analytics for Decision-making",
      value: '1.48',
      badgeColor: 'orange',
      position: 'top-right',
      description: "Using data to optimize menus and increase sales.",
    },
    {
      title: "Branding",
      description: "Customize the menu to match the style of your restaurant.",
    },
    {
      title: "Saving Money",
      value: '1.27',
      badgeColor: 'blue',
      position: 'bottom-left',
      description: "Flexible tariff plans.",
    },
  ];

  return (
    <div className={"container withArrow " + classes.main}>
      <Animate className="mainTitle">Benefits?</Animate>
      <Animate className={'subtitle'}>
        We will help your <div className="tag">businesses grow.</div>
      </Animate>

      <Animate className={classes.slider}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.3} // 4 видимых слайда
          slidesPerGroup={1} // Листание по 1 слайду
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }} // Автовоспроизведение каждые 3 сек
          breakpoints={{
              // Когда ширина экрана >= 320px
              500: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className={classes.card}>
                {!!benefit.value && (
                  <PercentageBadge value={benefit.value} color={benefit?.badgeColor} position={benefit?.position}/>
                )}
                <h3 className={classes.cardTitle}>{benefit.title}</h3>
                <p className={classes.cardText}>{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Animate>
    </div>
  );
}

export default Betefits;
