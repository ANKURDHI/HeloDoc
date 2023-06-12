import React from 'react'
const Login = ({role}) => {
    return (
     <form>
       {role=="admin"?
       <>
          <label htmlFor="username"></label>
          <input type="username" placeholder='Username'/>
        </>       
       :
       <>
        <label htmlFor="email"></label>
        <input type="email" placeholder='Email'/>
       </>}
       <label htmlFor="password"></label>
       <input type="password" placeholder='Password'/>

       <button type='submit'>LOGIN</button>
     </form>
  )
}

export default Login