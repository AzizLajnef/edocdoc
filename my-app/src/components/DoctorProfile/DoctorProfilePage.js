import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import Rating from 'react-rating-stars-component';
import { Modal, Button, Form } from 'react-bootstrap';
import profileImage from './image_16.png'; // Make sure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import './DoctorProfile.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { setDoctorProfile } from './redux/actions/doctorActions';

const DoctorProfilePage = () => {
  const [doctorData, setDoctorData] = useState({
    name: "Dr. zven Den",
    specialty: "Cardiology",
    imageUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ratings: 4.2,
      //   dispatch(setDoctorProfile(profileData));
  // }, [dispatch]);
  
    reviews: [
      { author: "Jane Smith", comment: "Very thorough and kind.", rating: 5 },
      { author: "Doe John", comment: "Helpful and informative.", rating: 4 },
    ],
    appointments: [
      { name: "Alice Wonderland", date: "2024-04-15, 10:00 AM", description: "Routine check-up", rating: 4 },
      { name: "Charlie Bucket", date: "2024-04-16, 11:00 AM", description: "Consultation", rating: 5 },
    ],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container my-5">
      {/* Profile Image */}
      <img src={profileImage} alt="Profile" className="profile-picture" />
      <div className="row">
        <div className="col-md-3">
          <DoctorInfo
            name={doctorData.name}
            specialty={doctorData.specialty}
            picture={doctorData.imageUrl}
            ratings={doctorData.ratings}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/')}>My Profile</a>
            </li>
            <li className="nav-item">
              <Button variant="primary" onClick={handleShow}>Change Password</Button>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/notifications')}>Notifications</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/reviews')}>Reviews</button>
            </li>
          </ul>
          <div className="mt-4">
            <h5>Filtered Appointments</h5>
            {doctorData.appointments.filter(appointment => appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) || appointment.description.toLowerCase().includes(searchQuery.toLowerCase())).map((appointment, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{appointment.name}</h5>
                  <p className="card-text">{appointment.description}</p>
                  <p className="card-text"><small className="text-muted">{appointment.date}</small></p>
                  <Rating value={appointment.rating} edit={false} size={24} activeColor="#007E85" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="new-password">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group controlId="confirm-new-password">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DoctorProfilePage;
