import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function UserRegister() {
const navigate = useNavigate();

  const [values, setValues] = useState({
    username:'',
    name:'',
    email:'',
    password:'',
    address:'',
    mobile:'',
  })

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  const [err, setErr] = useState(null);

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
            const res =  await axios.post('http://localhost:5000/api/user/userregister', values)
            console.log(res);
            navigate('/userlogin');
    }catch(err){
        setErr(err.response.data.message || "An error occurred");
        console.log(err);
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'
    style={{
        backgroundColor: '#ADD8E6' // Light Blue Color (Hex code)
      }}
      >
        <div className='bg-white p-3 rounded w-25'>
            <h3 className='text-center'>User Register</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='username'><strong>UserName</strong></label>
                    <input type='text' required placeholder='Enter Your User Name' name='username'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' required placeholder='Enter Your Name' name='name'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' required placeholder='Enter Your Email ID'  name='email'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' required placeholder='Enter Your Password' name='password'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='address'><strong>Address</strong></label>
                    <input type='text' placeholder='Enter Your Address' name='address'
                    onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='mobile'><strong>Mob No</strong></label>
                    <input type='tel' placeholder='Enter Your Mob No' name='mobile'
                    onChange={handleInput} className='form-control'/>
                </div>
                <button className='btn btn-primary w-100 mb-2'><strong>Register</strong></button>

                {err && (
                <div className="mt-2">
                <p className="text-danger mb-0 text-center">
                    {err}
                </p>
                </div>
                )}

                {/* <Link to='/userlogin' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link> */}

                <div className="text-center">
                    <span>Already have an account? </span>
                    <Link to='/userlogin' className='text-primary text-decoration-none'>Login</Link>
                </div>

            </form>
        </div>
    </div>
  )
}

export default UserRegister