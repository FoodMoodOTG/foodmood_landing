import React from 'react';
import styles from './Footer.module.css';
import { FaPhone, FaTelegramPlane, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Socials from "@/components/Socials/Socials";
import useMediaQuery from "@/hooks/useMediaQuery";

const Footer = () => {
  const isMob = useMediaQuery(false, '(max-width: 1000px)');

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrp}>
          <div className={styles.column}>
            <h4 className={styles.title}>HOME</h4>
            <ul className={styles.links}>
              <li>Features</li>
              <li>Benefits</li>
              <li>How It Works</li>
              <li>Contacts</li>
            </ul>
          </div>

          {!isMob ? (
            <>
              <div className={styles.column}>
                <h4 className={styles.title}>GET IN TOUCH</h4>
                <a href={'mailto:foodmood@gmail.com'}>foodmood@gmail.com</a>
              </div>

              <div className={styles.column}>
                <h4 className={styles.title}>CALL US</h4>
                <a href={'tel:+37060000000'}>+370 600 00 000</a>
              </div>

              <div className={styles.column}>
                <h4 className={styles.title}>VISIT US</h4>
                <p>11 Camelot Ct, Brighton, MA 02135</p>
              </div>
            </>
          ) : <div className={`${styles.column} ${styles.columnMob}`}>
            <h4 className={styles.title}>CONTACT INFO</h4>
            <p>11 Camelot Ct, Brighton, MA 02135</p>
            <a href={'tel:+37060000000'}>+370 600 00 000</a>
            <a href={'mailto:foodmood@gmail.com'}>foodmood@gmail.com</a>
          </div>
          }

        </div>

        <div>
          {isMob && (
            <h4 className={styles.title} style={{textAlign: 'center',marginTop: '30px'}}>FOLLOW US</h4>
          )}
          <Socials color={'black'}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
