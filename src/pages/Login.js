import React from 'react';
import addAvatar from '../img/addAvatar.png';

function Login() {
  return (
    <div className='formContainer'>
        <div className='formRaper'>
            <span className='logo'>StringVibesChat</span>
            <span className='title'>Login Page</span> 
            <form>
                <input type='email' placeholder='email '/>
                <input type='password' placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>You don't have account? Sign Up</p>
        </div>
    </div>
  )
}

export default  Login;
