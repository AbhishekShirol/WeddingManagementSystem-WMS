// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap } from 'react-bootstrap-icons';
// import { useNavigate } from 'react-router-dom';

// const ServiceBooking = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRegistrations();
//   }, []);

//   const fetchRegistrations = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/wedding/register');
//       setRegistrations(response.data);
//     } catch (error) {
//       console.error('Error fetching registrations:', error);
//     }
//   };

//   const handleNavigate = (path, registrationId) => {
//     navigate(`${path}/${registrationId}`); // Append registrationId to the path
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-4 d-flex justify-content-between align-items-center">
//         <h1 className="display-4">Wedding Registrations</h1>
//         <Button onClick={() => handleNavigate('/user/weddingregister')} variant="danger">
//           New Registration
//         </Button>
//       </div>

//       <div className="row">
//         {registrations.map((registration) => (
//           <div className="col-md-4 mb-4" key={registration.reg_id}>
//             <Card className="shadow-sm">
//               <Card.Header className="bg-danger text-white">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span>
//                     <Heart className="mr-2" />
//                     {registration.groom_name} & {registration.bride_name}
//                   </span>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <div className="d-flex align-items-center mb-2">
//                   <Calendar className="mr-2" />
//                   {new Date(registration.wedding_date).toLocaleDateString()}
//                 </div>
//                 <div className="d-flex align-items-center mb-2">
//                   <People className="mr-2" />
//                   {registration.number_of_guests} Guests
//                 </div>
//                 <div className="d-flex justify-content-between">
//                   <Button 
//                     disabled={registration.venue_id}
//                     onClick={() => handleNavigate('/user/venues', registration.reg_id)} // Pass registrationId
//                     variant={registration.venue_id ? "outline-secondary" : "primary"}
//                   >
//                     <PinMap className="mr-1" />
//                     {registration.venue_id ? 'Venue Booked' : 'Book Venue'}
//                   </Button>
//                   <Button
//                     disabled={registration.music_id}
//                     onClick={() => handleNavigate('/user/music', registration.reg_id)} // Pass registrationId
//                     variant={registration.music_id ? "outline-secondary" : "primary"}
//                   >
//                     <MusicNote className="mr-1" />
//                     {registration.music_id ? 'Music Booked' : 'Book Music'}
//                   </Button>
//                   <Button
//                     disabled={registration.catering_id}
//                     onClick={() => handleNavigate('/user/catering', registration.reg_id)} // Pass registrationId
//                     variant={registration.catering_id ? "outline-secondary" : "primary"}
//                   >
//                     <Truck className="mr-1" />
//                     {registration.catering_id ? 'Catering Booked' : 'Book Catering'}
//                   </Button>
//                   <Button
//                     disabled={registration.decoration_id}
//                     onClick={() => handleNavigate('/user/decoration', registration.reg_id)} // Pass registrationId
//                     variant={registration.decoration_id ? "outline-secondary" : "primary"}
//                   >
//                     <Camera className="mr-1" />
//                     {registration.decoration_id ? 'Decor Booked' : 'Book Decor'}
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceBooking;




// button small big


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap } from 'react-bootstrap-icons';
// import { useNavigate } from 'react-router-dom';

// const ServiceBooking = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRegistrations();
//   }, []);

//   const fetchRegistrations = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/wedding/register');
//       setRegistrations(response.data);
//     } catch (error) {
//       console.error('Error fetching registrations:', error);
//     }
//   };

//   const handleNavigate = (path, registrationId) => {
//     navigate(`${path}/${registrationId}`);
//   };

//   const handleCancel = async (registrationId, serviceType) => {
//     try {
//       await axios.post(`http://localhost:5000/api/wedding/cancel`, {
//         registrationId,
//         serviceType,
//       });
//       fetchRegistrations(); // Refresh registrations after cancellation
//     } catch (error) {
//       console.error(`Error canceling ${serviceType}:`, error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-4 d-flex justify-content-between align-items-center">
//         <h1 className="display-4">Wedding Registrations</h1>
//         <Button onClick={() => handleNavigate('/user/weddingregister')} variant="danger">
//           New Registration
//         </Button>
//       </div>

//       <div className="row">
//         {registrations.map((registration) => (
//           <div className="col-md-4 mb-4" key={registration.reg_id}>
//             <Card className="shadow-sm">
//               <Card.Header className="bg-danger text-white">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span>
//                     <Heart className="mr-2" />
//                     {registration.groom_name} & {registration.bride_name}
//                   </span>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <div className="d-flex align-items-center mb-2">
//                   <Calendar className="mr-2" />
//                   {new Date(registration.wedding_date).toLocaleDateString()}
//                 </div>
//                 <div className="d-flex align-items-center mb-2">
//                   <People className="mr-2" />
//                   {registration.number_of_guests} Guests
//                 </div>
//                 <div className="d-flex justify-content-between">
//                   <div>
//                     <Button
//                       disabled={registration.venue_id}
//                       onClick={() => handleNavigate('/user/venues', registration.reg_id)}
//                       variant={registration.venue_id ? "outline-secondary" : "primary"}
//                     >
//                       <PinMap className="mr-1" />
//                       {registration.venue_id ? 'Venue Booked' : 'Book Venue'}
//                     </Button>
//                     {registration.venue_id && (
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => handleCancel(registration.reg_id, 'venue')}
//                         className="ml-2"
//                       >
//                         Cancel Venue
//                       </Button>
//                     )}
//                   </div>
//                   <div>
//                     <Button
//                       disabled={registration.music_id}
//                       onClick={() => handleNavigate('/user/music', registration.reg_id)}
//                       variant={registration.music_id ? "outline-secondary" : "primary"}
//                     >
//                       <MusicNote className="mr-1" />
//                       {registration.music_id ? 'Music Booked' : 'Book Music'}
//                     </Button>
//                     {registration.music_id && (
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => handleCancel(registration.reg_id, 'music')}
//                         className="ml-2"
//                       >
//                         Cancel Music
//                       </Button>
//                     )}
//                   </div>
//                   <div>
//                     <Button
//                       disabled={registration.catering_id}
//                       onClick={() => handleNavigate('/user/catering', registration.reg_id)}
//                       variant={registration.catering_id ? "outline-secondary" : "primary"}
//                     >
//                       <Truck className="mr-1" />
//                       {registration.catering_id ? 'Catering Booked' : 'Book Catering'}
//                     </Button>
//                     {registration.catering_id && (
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => handleCancel(registration.reg_id, 'catering')}
//                         className="ml-2"
//                       >
//                         Cancel Catering
//                       </Button>
//                     )}
//                   </div>
//                   <div>
//                     <Button
//                       disabled={registration.decoration_id}
//                       onClick={() => handleNavigate('/user/decoration', registration.reg_id)}
//                       variant={registration.decoration_id ? "outline-secondary" : "primary"}
//                     >
//                       <Camera className="mr-1" />
//                       {registration.decoration_id ? 'Decor Booked' : 'Book Decor'}
//                     </Button>
//                     {registration.decoration_id && (
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => handleCancel(registration.reg_id, 'decoration')}
//                         className="ml-2"
//                       >
//                         Cancel Decor
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceBooking;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
// import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap, X } from 'react-bootstrap-icons';
// import { useNavigate } from 'react-router-dom';

// const ServiceBooking = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRegistrations();
//   }, []);

//   const fetchRegistrations = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/wedding/register');
//       setRegistrations(response.data);
//     } catch (error) {
//       console.error('Error fetching registrations:', error);
//     }
//   };

//   const handleNavigate = (path, registrationId) => {
//     navigate(`${path}/${registrationId}`);
//   };

//   const handleServiceBooking = async (registrationId, serviceType, serviceId) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/book-service', {
//         registrationId,
//         serviceType,
//         serviceId,  // Send the serviceId with the booking request
//       });

//       if (response.data.success) {
//         alert(`${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} booked successfully!`);
//         fetchRegistrations();  // Refresh the registration data after booking
//       } else {
//         alert('Booking failed');
//       }
//     } catch (error) {
//       console.error('Error booking service:', error);
//       alert('Error booking service');
//     }
//   };

//   const handleServiceCancellation = async (registrationId, serviceType, serviceId) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/cancel-service', {
//         registrationId,
//         serviceType,
//         serviceId,  // Send the serviceId with the cancellation request
//       });

//       if (response.data.success) {
//         alert(`${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} cancelled successfully!`);
//         fetchRegistrations();  // Refresh the registration data after cancellation
//       } else {
//         alert('Cancellation failed');
//       }
//     } catch (error) {
//       console.error('Error cancelling service:', error);
//       alert('Error cancelling service');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-4 d-flex justify-content-between align-items-center">
//         <h1 className="display-4">Wedding Registrations</h1>
//         <Button onClick={() => handleNavigate('/user/weddingregister')} variant="danger">
//           New Registration
//         </Button>
//       </div>

//       <div className="row">
//         {registrations.map((registration) => (
//           <div className="col-md-4 mb-4" key={registration.reg_id}>
//             <Card className="shadow-sm">
//               <Card.Header className="bg-danger text-white">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span>
//                     <Heart className="mr-2" />
//                     {registration.groom_name} & {registration.bride_name}
//                   </span>
//                   <Button 
//                     variant="outline-light" 
//                     size="sm"
//                     onClick={() => {/* Add wedding cancellation logic */}}
//                   >
//                     <X className="mr-1" />
//                     Cancel Wedding
//                   </Button>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <div className="d-flex align-items-center mb-2">
//                   <Calendar className="mr-2" />
//                   {new Date(registration.wedding_date).toLocaleDateString()}
//                 </div>
//                 <div className="d-flex align-items-center mb-2">
//                   <People className="mr-2" />
//                   {registration.number_of_guests} Guests
//                 </div>
//                 <div className="d-flex justify-content-between">
//                   <Button 
//                     onClick={() => registration.venue_id ? handleServiceCancellation(registration.reg_id, 'venue', registration.venue_id) : handleServiceBooking(registration.reg_id, 'venue', registration.venue_id)}
//                     variant={registration.venue_id ? "outline-danger" : "primary"}
//                   >
//                     <PinMap className="mr-1" />
//                     {registration.venue_id ? 'Cancel Venue' : 'Book Venue'}
//                   </Button>
//                   <Button
//                     onClick={() => registration.music_id ? handleServiceCancellation(registration.reg_id, 'music', registration.music_id) : handleServiceBooking(registration.reg_id, 'music', registration.music_id)}
//                     variant={registration.music_id ? "outline-danger" : "primary"}
//                   >
//                     <MusicNote className="mr-1" />
//                     {registration.music_id ? 'Cancel Music' : 'Book Music'}
//                   </Button>
//                   <Button
//                     onClick={() => registration.catering_id ? handleServiceCancellation(registration.reg_id, 'catering', registration.catering_id) : handleServiceBooking(registration.reg_id, 'catering', registration.catering_id)}
//                     variant={registration.catering_id ? "outline-danger" : "primary"}
//                   >
//                     <Truck className="mr-1" />
//                     {registration.catering_id ? 'Cancel Catering' : 'Book Catering'}
//                   </Button>
//                   <Button
//                     onClick={() => registration.decoration_id ? handleServiceCancellation(registration.reg_id, 'decoration', registration.decoration_id) : handleServiceBooking(registration.reg_id, 'decoration', registration.decoration_id)}
//                     variant={registration.decoration_id ? "outline-danger" : "primary"}
//                   >
//                     <Camera className="mr-1" />
//                     {registration.decoration_id ? 'Cancel Decor' : 'Book Decor'}
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceBooking;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap, X } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/User/authContext';
import { useContext } from 'react';

const ServiceBooking = () => {
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRegistrations();
  }, []);


  const {currentUser} = useContext(AuthContext);
  const user_id = currentUser?.id;

  const fetchRegistrations = async () => {
    try {
      // console.log('user_id:', user_id);
      const response = await axios.get('http://localhost:5000/api/wedding/register',{params: { user_id }});
      setRegistrations(response.data);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };

  const handleNavigate = (path, registrationId) => {
    navigate(`${path}/${registrationId}`);
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
      // console.log('registrationId:', registrationId);
      // console.log('venueId:', venueId);
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
    <div className="container mt-4">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h1 className="display-4">Wedding Registrations</h1>
        <Button onClick={() => handleNavigate('/user/weddingregister')} variant="danger">
          New Registration
        </Button>
      </div>

      <div className="row">
        {registrations.map((registration) => (
          <div className="col-md-4 mb-4" key={registration.reg_id}>
            <Card className="shadow-sm">
              <Card.Header className="bg-danger text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <Heart className="mr-2" />
                    {registration.groom_name} & {registration.bride_name}
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
                        handleNavigate('/user/venues', registration.reg_id); // Navigate when not booked
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
                        handleNavigate('/user/music', registration.reg_id); // Navigate when not booked
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
                        handleNavigate('/user/catering', registration.reg_id); // Navigate when not booked
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
                        handleNavigate('/user/decoration', registration.reg_id); // Navigate when not booked
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
    </div>
  );
};

export default ServiceBooking;