import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/User/authContext';

function WeddingRegister() {

  const navigate = useNavigate();

  const {currentUser} = useContext(AuthContext);

  const [values, setValues] = useState({
    groom_name: '',
    bride_name: '',
    wedding_date: '',
    number_of_guests: '',
  });

  const [err, setErr] = useState(null);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/wedding/register',{...values,user_id: currentUser.id,});
      console.log(res);
      navigate('/user'); // Redirect to confirmation page or next step
    } catch (err) {
      setErr(err.response.data.message || 'An error occurred');
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'
    style={{
      backgroundColor: '#ADD8E6' // Light Blue Color (Hex code)
    }}
    >
      <div className='bg-white p-3 rounded w-25'>
        <h3 className='text-center'>Wedding Registration</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='groom_name'><strong>Groom's Name</strong></label>
            <input
              type='text'
              required
              placeholder="Enter Groom's Name"
              name='groom_name'
              onChange={handleInput}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='bride_name'><strong>Bride's Name</strong></label>
            <input
              type='text'
              required
              placeholder="Enter Bride's Name"
              name='bride_name'
              onChange={handleInput}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='wedding_date'><strong>Wedding Date</strong></label>
            <input
              type='date'
              required
              name='wedding_date'
              onChange={handleInput}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='number_of_guests'><strong>Number of Guests</strong></label>
            <input
              type='number'
              required
              placeholder='Enter Number of Guests'
              name='number_of_guests'
              onChange={handleInput}
              className='form-control'
            />
          </div>

          <button className='btn btn-primary w-100'><strong>Register Wedding</strong></button>

          {err && (
            <div className="mt-2">
              <p className="text-danger mb-0 text-center">{err}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default WeddingRegister;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card, Form } from 'react-bootstrap';
// import { Calendar, Heart, People, MusicNote, Truck, Camera, PinMap } from 'react-bootstrap-icons';


// const WeddingRegistration = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const [formData, setFormData] = useState({
//     groom_name: '',
//     bride_name: '',
//     wedding_date: '',
//     number_of_guests: ''
//   });
//   const [showForm, setShowForm] = useState(false);

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/registrations', formData);
      
//       if (response.status === 201) { // Assuming 201 for successful creation
//         fetchRegistrations();
//         setFormData({
//           groom_name: '',
//           bride_name: '',
//           wedding_date: '',
//           number_of_guests: ''
//         });
//         setShowForm(false);
//       }
//     } catch (error) {
//       console.error('Error creating registration:', error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mb-4 d-flex justify-content-between align-items-center">
//         <h1 className="display-4">Wedding Registrations</h1>
//         <Button 
//           onClick={() => setShowForm(!showForm)}
//           variant="danger"
//         >
//           {showForm ? 'Cancel' : 'New Registration'}
//         </Button>
//       </div>

//       {showForm && (
//         <Card className="mb-4">
//           <Card.Header as="h5">New Wedding Registration</Card.Header>
//           <Card.Body>
//             <Form onSubmit={handleSubmit}>
//               <Form.Row>
//                 <Form.Group as={Form.Col} controlId="formGroomName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Groom's Name"
//                     value={formData.groom_name}
//                     onChange={(e) => setFormData({ ...formData, groom_name: e.target.value })}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group as={Form.Col} controlId="formBrideName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Bride's Name"
//                     value={formData.bride_name}
//                     onChange={(e) => setFormData({ ...formData, bride_name: e.target.value })}
//                     required
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Form.Row>
//                 <Form.Group as={Form.Col} controlId="formWeddingDate">
//                   <Form.Control
//                     type="date"
//                     value={formData.wedding_date}
//                     onChange={(e) => setFormData({ ...formData, wedding_date: e.target.value })}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group as={Form.Col} controlId="formNumberOfGuests">
//                   <Form.Control
//                     type="number"
//                     placeholder="Number of Guests"
//                     value={formData.number_of_guests}
//                     onChange={(e) => setFormData({ ...formData, number_of_guests: e.target.value })}
//                     required
//                   />
//                 </Form.Group>
//               </Form.Row>
//               <Button type="submit" variant="danger" className="w-100">
//                 Register Wedding
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       )}

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
//                     variant={registration.venue_id ? "outline-secondary" : "primary"}
//                   >
//                     <PinMap className="mr-1" />
//                     {registration.venue_id ? 'Venue Booked' : 'Book Venue'}
//                   </Button>
//                   <Button
//                     disabled={registration.music_id}
//                     variant={registration.music_id ? "outline-secondary" : "primary"}
//                   >
//                     <MusicNote className="mr-1" />
//                     {registration.music_id ? 'Music Booked' : 'Book Music'}
//                   </Button>
//                   <Button
//                     disabled={registration.catering_id}
//                     variant={registration.catering_id ? "outline-secondary" : "primary"}
//                   >
//                     <Truck className="mr-1" />
//                     {registration.catering_id ? 'Catering Booked' : 'Book Catering'}
//                   </Button>
//                   <Button
//                     disabled={registration.decoration_id}
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

// export default WeddingRegistration;
