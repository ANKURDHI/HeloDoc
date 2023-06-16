import React, { useEffect, useState } from 'react';
  const ROLES = ['admin','patient','doctor'];
const Login = ({role,setRole}) => {
  useEffect(() => {
    fetch("http://localhost:8080/api/patient/getAllPatient")
    .then(data => data.json())
    .then(response => console.log(response))
  }, [])
  
  const [loginData, setLoginData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    console.log(e.target.name)
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  };

  const handleClick = (el) => {
    setRole(el);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   //network requests
  };
    return (
     <form onSubmit={handleSubmit}>
       {role=="admin"?
       <>
          <label htmlFor="username"></label>
          <input type="text" name='username' placeholder='Username' 
          value={loginData.username}
          onChange={handleChange}/>
        </>       
       :
       <>
        <label htmlFor="email"></label>
        <input type="text" name='email' placeholder='Email' 
        value={loginData.email}
        onChange={handleChange}/>
       </>}
       <label htmlFor="password"></label>
       <input type="password" name='password' placeholder='Password' 
          value={loginData.password}
        onChange={handleChange}/>

       <button type='submit'>LOGIN</button>

       <div className="links">
        {ROLES.filter(current => current!=role).map(el => (
          <><a onClick={() => handleClick(el)}>Login as {el}</a><br/></>
        ))}
       </div>
     </form>
  )
}

export default Login