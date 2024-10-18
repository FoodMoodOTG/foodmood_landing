import React from 'react';
import styles from './PercentageBadge.module.css';
import clsx from 'clsx'

function PercentageBadge({ value, color, position }) {
  const isPositive = value >= 0;

  const colors = {
    'orange': '#E46239',
    'blue': '#77D0F6'
  }



  return (
    <div className={clsx(styles.badge, position)}
         style={{ backgroundColor: colors?.[color] || 'white' }}>
      <span className={styles.text}>
        {isPositive ? `+${value}%` : `${value}%`}
      </span>
      <span className={styles.icon}>
        {isPositive ? '▲' : '▼'}
      </span>
    </div>
  );
}

export default PercentageBadge;
