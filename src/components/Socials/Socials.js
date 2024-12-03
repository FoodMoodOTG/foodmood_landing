import React from 'react';
import styles from "./Socials.module.css";
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPhone, FaTelegramPlane } from "react-icons/fa";

function Socials({ color = 'white', size = 'large' }) {
  // Определение стилей на основе пропсов
  const wrapperClass = color === 'white' ? styles.whiteWrapper : styles.blackWrapper;
  const iconClass = color === 'white' ? styles.whiteIcon : styles.blackIcon;
  const sizeClass = size === 'large' ? styles.sizeLarge : styles.sizeSmall;

  // Динамически создаем иконки
  const icons = [
    { id: 1, icon: <FaPhone className={iconClass} /> },
    { id: 2, icon: <FaTelegramPlane className={iconClass} /> },
    { id: 3, icon: <FaFacebookF className={iconClass} /> },
    { id: 4, icon: <FaGooglePlusG className={iconClass} /> },
    { id: 5, icon: <FaLinkedinIn className={iconClass} /> },
    { id: 6, icon: <FaEnvelope className={iconClass} /> },
  ];

  return (
    <div className={styles.icons}>
      {icons.map(({ id, icon }) => (
        <a key={id} href="#" className={`${wrapperClass} ${sizeClass} ${styles.iconWrapper}`}>
          {icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;
