'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "@/blocks/Header/Header";
import Main from "@/blocks/Main/Main";
import Steps from "@/blocks/Steps/Steps";
import AboutUs from "@/blocks/AboutUs/AboutUs";
import AdminPanel from "@/blocks/AdminPanel/AdminPanel";
import Betefits from "@/blocks/Benefits/Betefits";
import Folder from "@/blocks/Folder/Folder";
import Form from "@/blocks/Form/Form";
import Footer from "@/blocks/Footer/Footer";
import QrCode from "@/blocks/QrCode/QrCode";

// Инициализируем ScrollTrigger внутри useEffect
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <Main/>
      <Folder/>
      <div className={'stars-strip'}></div>
      <Betefits/>
      <QrCode />
      <Steps/>
      <div className="stars-strip" style={{margin: '0px 0 70px'}}></div>

      <AdminPanel/>
      <AboutUs/>
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
