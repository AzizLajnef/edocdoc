import React from 'react';
import styles from './DoctorInfo.module.css';

export default function DoctorInfo({ name, specialty, picture, ratings }) {
  return (
    <div className={styles.doctorInfo}>
      <div className={styles.doctorImageWrapper}>
        <img src={picture} alt="Doctor" className={styles.doctorImage} />
      </div>
      <div className={styles.infoWrapper}>
        <h1 className={styles.doctorName}>{name}</h1>
        <h2 className={styles.doctorSpecialty}>{specialty}</h2>
        <div className={styles.ratingsWrapper}>
          <div className={styles.ratingsText}>Ratings: {ratings}%</div>
        </div>
      </div>
    </div>
  );
}