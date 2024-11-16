// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../../context/User/authContext';

// function WeddingRegister() {

//   const navigate = useNavigate();

//   const {currentUser} = useContext(AuthContext);

//   const [values, setValues] = useState({
//     groom_name: '',
//     bride_name: '',
//     wedding_date: '',
//     number_of_guests: '',
//   });

//   const [err, setErr] = useState(null);

//   const handleInput = (event) => {
//     setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/wedding/register',{...values,user_id: currentUser.id,});
//       console.log(res);
//       navigate('/user'); // Redirect to confirmation page or next step
//     } catch (err) {
//       setErr(err.response.data.message || 'An error occurred');
//       console.log(err);
//     }
//   };

//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100'
//     style={{
//       backgroundColor: '#87CEEB80' // Light Blue Color (Hex code)
//     }}
//     >
//       <div className='bg-white p-3 rounded w-25'>
//         <h3 className='text-center'>Wedding Registration</h3>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='groom_name'><strong>Groom's Name</strong></label>
//             <input
//               type='text'
//               required
//               placeholder="Enter Groom's Name"
//               name='groom_name'
//               onChange={handleInput}
//               className='form-control'
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='bride_name'><strong>Bride's Name</strong></label>
//             <input
//               type='text'
//               required
//               placeholder="Enter Bride's Name"
//               name='bride_name'
//               onChange={handleInput}
//               className='form-control'
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='wedding_date'><strong>Wedding Date</strong></label>
//             <input
//               type='date'
//               required
//               name='wedding_date'
//               onChange={handleInput}
//               className='form-control'
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='number_of_guests'><strong>Number of Guests</strong></label>
//             <input
//               type='number'
//               required
//               placeholder='Enter Number of Guests'
//               name='number_of_guests'
//               onChange={handleInput}
//               className='form-control'
//             />
//           </div>

//           <button className='btn btn-primary w-100'><strong>Register Wedding</strong></button>

//           {err && (
//             <div className="mt-2">
//               <p className="text-danger mb-0 text-center">{err}</p>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default WeddingRegister;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/User/authContext';

function WeddingRegister() {

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

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
      const res = await axios.post('http://localhost:5000/api/wedding/register', { ...values, user_id: currentUser.id });
      console.log(res);
      navigate('/user'); // Redirect to confirmation page or next step
    } catch (err) {
      setErr(err.response.data.message || 'An error occurred');
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      {/* Background image with opacity */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{
          backgroundImage: 'url(/images/home.jpg)',  // Background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5  // Apply opacity only to the background image
        }}
      />

      {/* Content section (form) */}
      <div className='bg-white p-3 rounded w-25 position-relative'>
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
              min="1"
              max="2000"
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
