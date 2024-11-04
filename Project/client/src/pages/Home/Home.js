import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  // axios.defaults.withCredentials = true;

  // const [name, setName] = useState('')
  // const navigate = useNavigate();

  // useEffect(() => {
    
  //   axios.get('http://localhost:5000/api/user')
  //   .then(res =>{
  //     if(res.data.valid){
  //       setName(res.data.username);
  //     }else{
  //       navigate('/');
  //     }
  //   })
  //   .catch(err=> console.log(err))
  // },[])


  return (
    <div className="vh-100 bg-secondary p-5 text-center shadow-sm" >
      {/* <h1>Welcome {name}</h1> */}
    </div>
  )
}

export default Home