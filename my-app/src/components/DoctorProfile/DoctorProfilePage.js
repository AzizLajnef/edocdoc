import React, { useState, useEffect } from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
// import Testimonials from '../Testimonials/Testimonials';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import axios from 'axios'; 
import '../DoctorInfo/DoctorProfile.css'
const DoctorProfile = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the doctor data from your backend
  const fetchDoctorData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/doctors'); 
      setDoctorData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctorData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!doctorData) {
    return <div>No data available</div>;
  }

  return (
    <div className="doctor-profile">
      <div className="left-section">
        <DoctorInfo
          name={doctorData.name}
          specialty={doctorData.specialty}
          picture={doctorData.imageUrl}
          // ratings={doctorData.reviews.rating}
        />
        {/* <Testimonials testimonials={doctorData.reviews.testimonials} /> */}
      </div>
      <div className="right-section">
        <h3>Upcoming Appointments</h3>
        <AppointmentCard appointments={doctorData.appointments} />
      </div>
    </div>
  );
};

export default DoctorProfile;
