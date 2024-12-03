import React from 'react';
import Header from "@/blocks/Header/Header";
import classes from  './news.module.css'
import clsx from "clsx";
import useMediaQuery from "@/hooks/useMediaQuery";

function NewsBanner(props) {
  const isMob = useMediaQuery(false, '(max-width: 500px)');

  return (
    <div  className={"h-[535px]  relative overflow-hidden"}>
      <Header isWhite={true}/>
      <div className={classes.box}>
        <img src={!isMob ? "/newsTitle.png" : "/newsTitle_mob.png"} alt="Food Mood`s News"
             className={classes.title}/>

        <img src="/grad.png" className={"absolute  top-0 left-0 w-screen h-screen object-cover"} alt=""/>
        <h1 className={"hidden"}>Food Mood`s News</h1>
      </div>


    </div>
  );
}

export default NewsBanner;