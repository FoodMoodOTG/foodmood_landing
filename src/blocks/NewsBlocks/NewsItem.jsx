import React from 'react';
import Link from "next/link";

function NewsItem({tags, title, duration, img, link}){
  return (
    <Link href={link} className={"border border-black rounded-[20px] bg-white"}>
      <div className={"h-[230px] relative border-b border-black rounded-[20px]"}>
        {img ? (
          <img src={img} className={"w-full h-full object-cover"} alt=""/>
        ) : (
          <div className={"bg-[#D9D9D9] w-full h-full rounded-[20px]"}></div>
        )}

        <div className={'absolute bottom-[10px] left-[20px] flex flex-wrap gap-[15px]'}>
          {tags.map((tag, index) => (
            <div key={index + "_s"} className={"btn btn-black-outline !bg-white !normal-case !text-[20px]"}>{tag}</div>
          ))}
        </div>
      </div>
      <div className={"md:p-[22px] p-[15px] md:pt-[15px] pt-[20px]"}>
        <div className={"md:text-[25px] text-[22px]"}>{title}</div>
        <div className={"md:text-[20px] text-[15px]"}>{duration}</div>
      </div>
    </Link>
  )
}

export default NewsItem;