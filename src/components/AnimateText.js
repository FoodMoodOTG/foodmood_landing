'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

function AnimateText({ text, className, children }) {
  const textRef = useRef(null);
  const isMob = useMediaQuery(false, '(max-width: 1000px)');

  useEffect(() => {
    const words = textRef.current.querySelectorAll('span');
    const mob = window.innerWidth < 700

    if(mob){
      return
    }
    // Настройка анимации с использованием ScrollTrigger
    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 25, // Начальное смещение вниз
      },
      {
        opacity: 1,
        y: 0,  // Возвращаем в исходное положение
        duration: 2,
        ease: 'power2.out',
        stagger: 0.08, // Задержка между появлением каждого слова
        scrollTrigger: {
          trigger: textRef.current,  // Триггер анимации (наш текст)
          start: isMob ? 'top 110%' : 'top 85%',         // Когда верх элемента достигает 80% экрана
          end: isMob ? 'top 85%' : 'top 55%',           // Завершение анимации
          scrub: 1,
        },
      }
    );
  }, [isMob]);

  return (
    <div ref={textRef} className={className}>
      {!children
        ? text.split(' ').map((word, index) => (
          <span key={index} style={{ display: 'inline-block', marginRight: '4px' }}>
            {word}
          </span>
        ))
        : children
      }
    </div>
  );
}

export default AnimateText;
