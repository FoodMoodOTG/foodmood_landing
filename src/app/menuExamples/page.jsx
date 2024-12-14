'use client'

import React from 'react';
import Header from "@/blocks/Header/Header";
import classes from './menuExample.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import PercentageBadge from "@/components/Tag/PercentageBadge";
import 'swiper/css';
import clsx from "clsx";
import Footer from "@/blocks/Footer/Footer";
import useMediaQuery from "@/hooks/useMediaQuery";
import LinkIcon from "@/app/icons/LinkIcon";

function StepItem({title, img, classes, text, index}){
  return (
    <div className={clsx(classes, 'md:px-[35px] px-[20px] rounded-[30px] border border-black py-[25px]')}>
      <div className={'text-[22px] font-semibold'}>{title}</div>
      <img src={img} className={"rounded-[10px] my-[12px]"} alt=""/>
      <div className={'text-[22px]'}>{text}</div>
      <div className={'circle bg-white ml-auto font2 sm:mt-0 mt-[-5px]'}>{index}</div>
    </div>
  )
}

function Page() {
  const isMob = useMediaQuery(false, '(max-width: 1000px)');

  const data = [
    { link: 'https://foodmood.menu/sushi-food-20241114201404', text: 'SUSHI BAR' },
    { link: 'https://foodmood.menu/happy-donuts--20241114182210', text: 'BAKERY' },
    { link: 'https://foodmood.menu/pizza-rest-20241114184154', text: 'PIZZERIA' },
    { link: 'https://foodmood.menu/chinese-food-20241116123759', text: 'CHINESE FOOD' },
    { link: 'https://foodmood.menu/mexican-20241114214204', text: 'MEXICAN' },
    { link: 'https://foodmood.menu/seafood-20241116110506', text: 'SEAFOOD' },
    { link: 'https://foodmood.menu/steak-house-demo-20241116224646 ', text: 'STEAK HOUSE' },
    { link: 'https://foodmood.menu/georgian-cousine-demo-20241117084548', text: 'GEORGIAN COUSINE' },
  ];
  return (
    <div>
      <Header isWhite={true}/>
      <div className={classes.wrp}>
        <img src={!isMob ? "/bg_2.png" : "/bg_2_mob.png"}
             className={"absolute pointer-events-none top-0 left-1/2 -translate-x-1/2 h-auto object-cover w-screen"}
             alt=""/>

        <div className={classes.box}>
          <h1 className={'mainTitle lh1 mb-[20px]'}>Create a Unique Menu for Any Type of Venue</h1>
          <div className={classes.text}>With FoodMood, you can design a menu for any kind of business
            <br/>— from an elegant
            restaurant to a cozy
            bakery, from a pizzeria to a signature steakhouse. Our service provides flexible tools that allow you to add
            any menu items and categories, so your menu is attractive and perfectly reflects your establishment style.
          </div>
          <a href="tel:+88000000000" className="btn btn-black lg:hidden mt-[30px]" style={{fontSize: '16px', fontWeight: 400}}>
            get started
            <LinkIcon/>
          </a>
        </div>
      </div>
      <br/>
      <div className={'stars-strip'}></div>

      <div className={"container relative z-[30] !lg:pt-[75px] !pt-[25px]"}>
        <div className={"grid lg:grid-cols-2 lg:gap-[15px] lg:mb-[35px] mb-[25px]"}>
          <h3 className={"mainTitle"}>Menu Examples </h3>
          <p className={"text-[22px]"}>*FoodMood makes menu creation quick and intuitive
            <br/>— add dishes, photos,
            descriptions, and promotional
            offers in just a few minutes.*</p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'} // 4 видимых слайда
          navigation
          loop={true}
          className={'menuExampleSwiper'}
          direction={"vertical"}
          autoplay={{delay: 422000, disableOnInteraction: false}} // Автовоспроизведение каждые 3 сек
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
              direction: "horizontal"
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
              direction: "horizontal"
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
              direction: "horizontal"
            },
          }}
        >
          {data.map((el, index) => (
            <SwiperSlide key={index}>
              <a href={el.link}>
                <div className={classes.menuExample}>
                  <img src={`/exp_${index + 1}.png`} className={classes.menuExampleImage} alt=""/>
                </div>
                <div className="btn btn-black-outline mt-[15px]">{el.text}</div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className={"mt-[65px]"}>
          <h3 className={"mainTitle mb-[25px] md:text-center text-left"}>FoodMood Interface Elements </h3>

          <div className={"grid md:grid-cols-2 gap-[20px]"}>
            <div className={"flex flex-col md:gap-[20px] gap-[10px]"}>
              <div className={"space-y-[10px]"}>
                <img src="/inter_1.png" alt=""/>
                <div className={"md:text-[22px] text-[20px]"}>Description Description</div>
              </div>
              <div className={"space-y-[10px]"}>
                <img src="/inter_2.png" alt=""/>
                <div className={'md:text-[22px] text-[20px]'}>Description Description</div>
              </div>
            </div>
            <div className={"space-y-[10px]"}>
              <img src="/inter_3.png" alt=""/>
              <div className={'md:text-[22px] text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </div>
            </div>
          </div>
        </section>

        <section className={"md:grid flex flex-col-reverse md:grid-cols-2 gap-[20px] mt-[50px]"}>
          <div>
            <video src="/vid.MP4" className={"rounded-[35px] border border-black"} controls={true} autoPlay loop muted></video>
            {/*<img className={"rounded-[35px] border border-black"} src="/banner.jpg" alt=""/>*/}
          </div>
          <div className={"bg-[#77D0F6] py-[30px] rounded-[35px] flex flex-col items-center justify-center text-center border border-black"}>
            <h4 className={"mainTitle"}>Create Your Own Menu With<br/>
              Food Mood</h4>
          </div>
        </section>

        <section className={"mt-[75px]"}>
          <h3 className={"mainTitle mb-[15px]"}>Easy to Create Your Menu</h3>

          <div className={"grid md:grid-cols-2 gap-[20px]"}>
            <StepItem
              classes={'bg-[#E46239]'}
              text={'You can easily enter all the necessary information about your menu.'}
              index={'01.'}
              img={'/st_1.jpg'}
              title={'About the menu'}
            />
            <StepItem
              classes={'bg-[#F7B4B4]'}
              text={'Create your own categories to new menu  for yor restaurant'}
              index={'02.'}
              img={'/st_2.jpg'}
              title={'Categories'}
            />
            <StepItem
              classes={'bg-[#E44439]'}
              text={'Create your dish with photo and description'}
              index={'03.'}
              img={'/st_3.jpg'}
              title={'Dishes'}
            />
            <StepItem
              classes={'bg-[#C9F7B4]'}
              text={'Add special modifiers for the dishes '}
              index={'04.'}
              img={'/st_4.jpg'}
              title={'Modifiers'}
            />
          </div>
        </section>
        
        <div className={"relative mt-[75px] mb-[140px] pt-[65px] min-h-[650px] px-[25px] pb-[135px] flex md:items-end"}>
          <img src="/bnr_3.jpg" className={"absolute top-0 object-cover rounded-[30px] border border-black left-0 w-full h-full"} alt=""/>
          <h3 className={"mainTitle relative z-[20] text-white"}>
            Create your menu in minutes and wow your guests today with FoodMood!
          </h3>
          <a href={'#'} className={"uppercase rounded-full  translate-y-1/2 absolute  left-1/2 bottom-0 -translate-x-1/2  text-[23px] font-bold"}>
            <div className={"w-[240px] h-[240px] bg-[#EBF677] relative z-[40] rounded-full border border-black flex items-center justify-center text-center"}>
              get started
            </div>
            <div className={"bg-white  w-[280px] h-[280px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
            </div>
          </a>
        </div>

      </div>
      <div className={"relative z-[30]"}>
        <Footer />
      </div>

    </div>
  );
}

export default Page;