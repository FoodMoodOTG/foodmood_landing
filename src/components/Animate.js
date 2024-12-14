'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

function Animate({ className, children }) {
  const textRef = useRef(null);
  const isMob = useMediaQuery(false, '(max-width: 1000px)');


  useEffect(() => {
    const mob = window.innerWidth < 700
    if(mob){
      return
    }

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 30, // Начальное смещение вниз
      },
      {
        opacity: 1,
        y: 0,  // Возвращаем в исходное положение
        duration: 1,
        ease: 'power2.out',
        stagger: 0.05, // Задержка между появлением каждого слова
        scrollTrigger: {
          trigger: textRef.current,
          start:  mob ? 'top 110%' : 'top 85%',
          end: mob ? 'top 90%' : 'top 55%',
          scrub: 1,
        },
      }
    );
  }, [isMob]);


  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}

export default Animate;
