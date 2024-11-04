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

    // Optional: You can add useEffect to check if user is already logged in
    // useEffect(() => {
    //     const checkUser = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:5000/api/user');
    //             if (res.data.valid) {
    //                 navigate('/user');
    //             } else {
    //                 navigate('/userlogin', { replace: true });
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     checkUser();
    // }, [navigate]);


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h3 className='text-center'>User Login</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' required placeholder='Enter Your Email ID' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' required placeholder='Enter Your Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                </div>

                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>

                <p>You agree our terms and conditions</p>

                {err && (
                <div className="mt-2">
                <p className="text-danger mb-0 text-center">
                    {err}
                </p>
                </div>
                )}

                <Link to='/userregister' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
            </form>
        </div>
    </div>
  )
}

export default UserLogin