import React,{ useState } from 'react'
const Login = ({role}) => {
  const[loginData, setLoginData]= useState({
    username:"",
    email:"",
    password:"",
  });
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setLoginData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/patient/checkPatient', {
      headers: {
          'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ patientEmail: loginData.email, password: loginData.password })
  })
      .then(response => {
        if(response.status==404){
          console.log("notfound")
        }
        else{
          console.log("FOUND")
          localStorage.setItem("email", loginData.email);
// localStorage.getItem("lastname");
        }
      
      })
      
      
        
      
     }
    
    return (
     <form onSubmit={handleSubmit}>
       {role=="admin"?
       <>
          <label htmlFor="username"></label>
          <input  type="username" name="username" placeholder='Username'  value={loginData.username} onChange={handleChange} />
        </>       
       :
       <>
        <label htmlFor="email"></label>
        <input id="email" type="email" name="email" placeholder='Email'value={loginData.email} onChange={handleChange} />
       </>}
       <label htmlFor="password"></label>
       <input id="password" type="password" name="password" placeholder='Password' value={loginData.password} onChange={handleChange}/>

       <button type='submit'>LOGIN</button>
     </form>
  )
}

export default Login