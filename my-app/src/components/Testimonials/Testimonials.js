import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials({  }) {
  return (
    <div className={styles.testimonialsWrapper}>
      <h3>Testimonials</h3>
      {/* <ul className={styles.testimonialsList}>
        {testimonials.map((testimonial, index) => (
          <li className={styles.testimonial} key={index}>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{testimonial.author}</span>
            </div>
            <p className={styles.testimonialContent}>"{testimonial.content}"</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}