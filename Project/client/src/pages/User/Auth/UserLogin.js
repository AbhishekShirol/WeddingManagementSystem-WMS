import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate ,useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../context/User/authContext';


function UserLogin() {
    
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const {login,currentUser} = useContext(AuthContext);
    const location = useLocation();

    // Check if the user is already logged in
    useEffect(() => {
        if (currentUser) {
            navigate('/user'); // Redirect to /user if already logged in
        }
    }, [currentUser, navigate]); // Depend on currentUser


    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    // console.log(currentUser);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(values);
            // await axios.post('http://localhost:5000/api/user/userlogin', values);
            alert("User Signed In Successfully");
            navigate('/user');

        } catch (error) {
            setErr(error.response.data.message || "An error occurred");
            console.log(error); // Log error for debugging
        }

    };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'
    style={{
        backgroundColor: '#ADD8E6' // Light Blue Color (Hex code)
      }}
      >
        <div className='bg-white p-3 rounded w-25'>
            <h3 className='text-center'>User Login</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' required placeholder='Enter Your Email ID' name='email'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' required placeholder='Enter Your Password' name='password'
                    onChange={handleInput} className='form-control'/>
                </div>

                <button type='submit' className='btn btn-primary w-100 mb-2'><strong>Login</strong></button>
    
                {err && (
                <div className="mt-2">
                <p className="text-danger mb-0 text-center">
                    {err}
                </p>
                </div>
                )}

                {/* <Link to='/userregister' className='btn btn-default border w-100 bg-light text-decoration-none'>Register</Link> */}
                <div className="text-center">
                    <span>Don't have an account? </span>
                    <Link to='/userregister' className='text-primary text-decoration-none'>Register now</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserLogin