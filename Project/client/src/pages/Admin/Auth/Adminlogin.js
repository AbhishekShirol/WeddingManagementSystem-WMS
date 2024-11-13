import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../context/Admin/authContext';

function AdminLogin() { // <-- Changed to PascalCase (AdminLogin)

    const navigate = useNavigate();
    const { login, currentAdmin } = useContext(AuthContext);
  

    // Check if the admin is already logged in
    useEffect(() => {
        if (currentAdmin) {
            navigate('/admin'); // Redirect to /admin if already logged in
        }
    }, [currentAdmin, navigate]); // Depend on currentadmin


    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(values);
            alert("Admin Signed In Successfully");
            navigate('/admin');

        } catch (error) {
            setErr(error.response?.data?.message || "An error occurred");
            console.log(error); // Log error for debugging
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'
        style={{
            backgroundColor: '#ADD8E6' // Light Blue Color (Hex code)
        }}>
            <div className='bg-white p-3 rounded w-25'>
                <h3 className='text-center'>Admin Login</h3>
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

                    <div className="text-center">
                        <span>Don't have an account? </span>
                        <Link to='/adminregister' className='text-primary text-decoration-none'>Register now</Link>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}

export default AdminLogin; // <-- Ensure export matches the PascalCase component name
