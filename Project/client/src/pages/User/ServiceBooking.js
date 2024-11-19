import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap, X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/User/authContext';
import { useContext } from 'react';

const ServiceBooking = () => {
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const user_id = currentUser?.id;

  // Memoized fetchRegistrations function using useCallback
  const fetchRegistrations = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wedding/register', { params: { user_id } });
      setRegistrations(response.data);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  }, [user_id]);  // Only recreate if user_id changes

  // useEffect with the correct dependency array
  useEffect(() => {
    fetchRegistrations();  // Now it's safe to call fetchRegistrations
  }, [fetchRegistrations]);  // Add fetchRegistrations to the dependency array

  const handleNavigate = (path, registrationId) => {
    navigate(`${path}/${registrationId}`);
  };

  const handleNavigateNewRegistration = (path) => {
    navigate(path); // Navigates to the given path
  };

  const handleServiceCancellation = async (registrationId, serviceType, serviceId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cancel-service', {
        registrationId,
        serviceType,
        serviceId,  // Send the serviceId with the cancellation request
      });

      if (response.data.success) {
        alert(`${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} cancelled successfully!`);
        fetchRegistrations();  // Refresh the registration data after cancellation
      } else {
        alert('Cancellation failed');
      }
    } catch (error) {
      console.error('Error cancelling service:', error);
      alert('Error cancelling service');
    }
  };

  const handleWeddingCancellation = async (registrationId, venueId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cancel-registration', {
        registrationId,
        venueId,  // Send the venueId to make it available
      });

      if (response.data.success) {
        alert('Wedding and venue cancelled successfully!');
        fetchRegistrations();  // Refresh the registration data after cancellation
      } else {
        alert('Cancellation failed');
      }
    } catch (error) {
      console.error('Error cancelling wedding:', error);
      alert('Error cancelling wedding');
    }
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: '94vh', overflowY: 'auto', position: 'relative' }}
    >
      {/* Background Image */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: 'url(/images/home.jpg)', // Background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5, // Apply opacity only to the background image
          zIndex: -1, // Ensures that content is above the background
        }}
      />

      {/* Content */}
      <div className="container" style={{ maxHeight: '100%', overflowY: 'auto' }}>
        <h1 className="my-4 d-flex justify-content-center">Wedding Registrations</h1>

        <div className="row">
          {registrations.map((registration) => (
            <div className="col-md-4 mb-4" key={registration.reg_id}>
              <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      {registration.groom_name}
                      <Heart className="mr-2 mx-2" />
                      {registration.bride_name}
                    </span>
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={() => handleWeddingCancellation(registration.reg_id, registration.venue_id)}
                    >
                      <X className="mr-1" />
                      Cancel Wedding
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center mb-2">
                    <Calendar className="mr-2" />
                    {new Date(registration.wedding_date).toLocaleDateString()}
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <People className="mr-2" />
                    {registration.number_of_guests} Guests
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={() => {
                        if (registration.venue_id) {
                          handleServiceCancellation(registration.reg_id, 'venue', registration.venue_id);
                        } else {
                          handleNavigate('/user/venues', registration.reg_id);
                        }
                      }}
                      variant={registration.venue_id ? "outline-danger" : "primary"}
                    >
                      <PinMap className="mr-1" />
                      {registration.venue_id ? 'Cancel Venue' : 'Book Venue'}
                    </Button>
                    <Button
                      onClick={() => {
                        if (registration.music_id) {
                          handleServiceCancellation(registration.reg_id, 'music', registration.music_id);
                        } else {
                          handleNavigate('/user/music', registration.reg_id);
                        }
                      }}
                      variant={registration.music_id ? "outline-danger" : "primary"}
                    >
                      <MusicNote className="mr-1" />
                      {registration.music_id ? 'Cancel Music' : 'Book Music'}
                    </Button>
                    <Button
                      onClick={() => {
                        if (registration.catering_id) {
                          handleServiceCancellation(registration.reg_id, 'catering', registration.catering_id);
                        } else {
                          handleNavigate('/user/catering', registration.reg_id);
                        }
                      }}
                      variant={registration.catering_id ? "outline-danger" : "primary"}
                    >
                      <Truck className="mr-1" />
                      {registration.catering_id ? 'Cancel Catering' : 'Book Catering'}
                    </Button>
                    <Button
                      onClick={() => {
                        if (registration.decoration_id) {
                          handleServiceCancellation(registration.reg_id, 'decoration', registration.decoration_id);
                        } else {
                          handleNavigate('/user/decoration', registration.reg_id);
                        }
                      }}
                      variant={registration.decoration_id ? "outline-danger" : "primary"}
                    >
                      <Camera className="mr-1" />
                      {registration.decoration_id ? 'Cancel Decor' : 'Book Decor'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Button className='d-flex justify-content-center mx-auto' onClick={() => handleNavigateNewRegistration('/user/weddingregister')} variant="primary">
          <strong> New Registration </strong>
        </Button>
      </div>
    </div>
  );
};

export default ServiceBooking;

