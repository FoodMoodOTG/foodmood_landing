import React from 'react';
import classes from './Input.module.css';

// Компонент Input принимает различные пропсы
const Input = ({ label, id, type = "text", error, register, ...rest }) => {
  return (
    <div className={classes.inputGroup}>
      {label && <label htmlFor={id} className={classes.label}>{label}</label>}
      <input
        id={id}
        type={type}
        className={`${classes.input} ${error ? classes.inputError : ''}`}
        {...register} // Подключаем регистрацию поля формы
        {...rest} // Прочие пропсы, такие как placeholder, value и т.д.
      />
      {error && <p className={classes.error}>{error.message}</p>}
    </div>
  );
};

export default Input;
