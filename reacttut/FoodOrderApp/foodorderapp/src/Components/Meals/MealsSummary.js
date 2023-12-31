import React from 'react'
import styles from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2 className={styles['summary h2']}> Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals arwe cooked with high quality ingredients, just in time
        and ofcourse by experience chefs!
      </p>
    </section>
  );
}

export default MealsSummary