import React from 'react';
import styles from './AppointmentCard.module.css';

const appointment = {
  name: 'John Doe',
  date: '08-Jun-2021, 10:00 AM',
  description: 'Check-up for high blood pressure',
};

const AppointmentCard = () => {
  return (
    <div className={styles.appointmentCard}>
      <div className={styles.appointmentDetails}>
        <div className={styles.appointmentName}>{appointment.name}</div>
        <div className={styles.appointmentDate}>{appointment.date}</div>
      </div>
      <div className={styles.appointmentDescription}>
        {appointment.description}
      </div>
    </div>
  );
};

export default AppointmentCard;