'use client'

import React from 'react';
import Header from "@/blocks/Header/Header";
import Footer from "@/blocks/Footer/Footer";
import Link from "next/link";
import NewsBanner from "@/blocks/NewsBlocks/NewsBanner";
import NewsItem from "@/blocks/NewsBlocks/NewsItem";
import useMediaQuery from "@/hooks/useMediaQuery";



function Page(props) {

  return (
    <div>

      <NewsBanner />

      <div className={"bg-white rounded-[20px] mt-[-25px] relative z-10"} style={{borderRadius: '30px 30px 0 0'}}>
        <div className="container">
          <div className={"grid md:grid-cols-2 pt-[50px]  md:gap-[20px] items-end"}>
            <h2 className={"mainTitle"}>Last News</h2>
            <p className={"md:text-right max-w-[420px] md:ml-auto pb-[20px]"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua.</p>
          </div>

          <div className={"grid lg:grid-cols-3 md:grid-cols-2  gap-[20px] md:mt-[25px] pb-[50px]"}>
            {Array.from({ length: 15 }).map((item, index) => (
              <NewsItem
                key={index}
                img={null}
                title={'News Title “Description”'}
                tags={['Topic', 'Topic Topic']}
                link={'/news/1'}
                duration={'~ 10 min'}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;