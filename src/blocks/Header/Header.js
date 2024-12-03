'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import {FaBars, FaCross, FaCrosshairs, FaTimes} from 'react-icons/fa';
import Socials from "@/components/Socials/Socials";
import { IoClose } from "react-icons/io5";
import LinkIcon from "@/app/icons/LinkIcon";
import clsx from "clsx";
import { useRouter } from 'next/navigation'
import {useScrollToSection} from "@/hooks/useScrollToSection";


const Header = ({isWhite}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const router = useRouter()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // if (isMenuOpen) {
    //   document.body.style.overflow = 'hidden';
    //   document.body.style.height = '100vh';
    // } else {
    //   document.body.style.overflow = 'auto';
    //   document.body.style.height = 'initial';
    // }
    // // Очистка эффекта при размонтировании компонента
    // return () => {
    //   document.body.style.overflow = 'auto';
    //   document.body.style.height = 'initial';
    // };
  }, [isMenuOpen]);


  const linkClick = (e, id, href) => {
    e.preventDefault()

    const pathname = window.location.pathname
    console.log(e, id, href)
    if(pathname !== '/'){
      router.push(href);
    }
    setIsMenuOpen(false);
    scrollToSection(id)

  }

  const burgerClass = `${styles.burger} ${isMenuOpen ? styles.burgerIsActive : ''}`;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.logoRow}>
            <div className={styles.logoMain}>
              <Image src="/images/logo.png" width={150} height={60} alt="FoodMood Logo"/>
            </div>
            <ul className={styles.nav}>
              <li><a onClick={(e) => linkClick(e, 'features', '/#features')} className={styles.link + ' ' + clsx({'text-white': isWhite})} href="#features">Features</a></li>
              <li><a onClick={(e) => linkClick(e, 'betefits', '/#betefits')} className={styles.link + ' ' + clsx({'text-white': isWhite})} href="#benefits">Benefits</a></li>
              <li><a onClick={(e) => linkClick(e, 'reviews', '/#reviews')} className={styles.link + ' ' + clsx({'text-white': isWhite})} href="#reviews">Reviews</a></li>
              <li>
                <a onClick={(e) => linkClick(e, 'form', '/#form')} className={styles.link + ' ' + clsx({'text-white': isWhite})} href="#contacts">
                  Contacts
                </a>
                <div className={styles.drop}>
                  <div>
                    <div  className={styles.dropTitle}>Address</div>
                    <a className={styles.dropLink} href='#'>11 Camelot Ct, Brighton, MA 02135</a>
                  </div>
                  <div>
                    <div className={styles.dropTitle}>Phone </div>
                    <a className={styles.dropLink} href='tel:+37060000000'>+370 600 00 000</a>
                  </div>
                  <div>
                    <div className={styles.dropTitle}>Email</div>
                    <a className={styles.dropLink} href="mailto:foodmood@gmail.com">foodmood@gmail.com</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Телефон слева */}
          <div className={styles.btns}>
            <a href="tel:+88000000000" className="btn btn-black" style={{fontSize: '16px',fontWeight: 400}}>
              get started
              <LinkIcon />
            </a>
            <a href="tel:+88000000000" className="btn btn-white-outline" style={{fontSize: '16px'}}>8 800 000-00-00</a>
            <a href="https://foodmood.menu" target={'_blank'} className="btn btn-white-outline" style={{fontSize: '16px'}}>Demo</a>
          </div>

          {/* Бургер-меню справа */}
          <div className={burgerClass} >
            {!isMenuOpen ? <div className={"flex items-center"} style={{display: 'flex', gap: '10px'}}>
              <a href="https://foodmood.menu" target={'_blank'} className="btn btn-white-outline"
                 style={{fontSize: '16px'}}>Demo</a>
              <FaBars onClick={toggleMenu} color={isWhite ? "white" : 'black'} style={{fontSize: '25px'}}/>
            </div> : <IoClose onClick={toggleMenu} style={{fontSize: '32px'}}/>}
          </div>
        </div>
      </div>

      {/* Боковое меню */}
      <nav className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <Image src="/images/logo_green.png" width={160} height={58} alt="FoodMood Logo"/>
        </div>

        <ul className={styles.menuList}>
          <li><a onClick={(e) => linkClick(e, 'features', '/#features')} href="#features">FEATURES</a></li>
          <li><a onClick={(e) => linkClick(e, 'betefits', '/#betefits')} href="#benefits">BENEFITS</a></li>
          <li><a onClick={(e) => linkClick(e, 'reviews', '/#reviews')} href="#reviews">REVIEWS</a></li>
          <li><a onClick={(e) => linkClick(e, 'form', '/#form')} href="#contacts">CONTACTS</a></li>
        </ul>

        <div className={styles.info}>
          <div className={styles.contactInfo}>
            <h4>CONTACT INFO</h4>
            <p>11 Camelot Ct, Brighton,<br/> MA 02135</p>
            <a href={'#'}>+370 600 00 000</a>
            <a href={'#'}>foodmood@gmail.com</a>
          </div>

          <Socials size={'small'}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
