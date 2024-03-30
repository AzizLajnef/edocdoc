import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Review from './Review.jsx'; 

const DoctorProfilPage = () => {
  const history = useHistory();
  // Define doctorProfile state
  const [doctorProfile, setDoctorProfile] = useState({
    imageUrl: '',
    name: '',
    reviews: [],
    appointments: [],
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching doctor's profile data
    const fetchDoctorProfile = async () => {
      try {
        // Perform API request to fetch doctor's profile data
        const response = await fetch('/api/doctor/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch doctor profile data');
        }
        const data = await response.json();
        setDoctorProfile(data); // Update doctorProfile state with fetched data
      } catch (error) {
        console.error(error);
        // Redirect to error page or display error message
      }
    };
    fetchDoctorProfile(); // Call the fetchDoctorProfile function
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search functionality
  };

  const handleAppointmentAction = (appointmentId, action) => {
    // Handle appointment action (accept or reject)
    // Update appointments state accordingly
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2>Doctor Profile</h2>
        <div className="doctor-info">
          <div className="doctor-profile">
            <img src={doctorProfile.imageUrl} alt="Doctor Profile" />
            <h3>{doctorProfile.name}</h3>
            <div className="doctor-reviews">
              <h4>Reviews</h4>
              {doctorProfile.reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="appointment-list">
          <h3>Appointment Requests</h3>
          <ul>
            {doctorProfile.appointments.map(appointment => (
              <li key={appointment.id}>
                {appointment.patientName} - {appointment.date}
                <button onClick={() => handleAppointmentAction(appointment.id, 'accept')}>Accept</button>
                <button onClick={() => handleAppointmentAction(appointment.id, 'reject')}>Reject</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilPage;
