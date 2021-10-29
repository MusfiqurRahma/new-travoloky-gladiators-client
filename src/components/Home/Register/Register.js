import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const { signInUsingGoogle,setEmail,setPassword, handleRegistration} = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
         <div className='login-form'>
           <div className='reg-form'>
             <h2 style={{fontWeight:'700',color:'rgb(53, 180, 219)'}}>Create an account Here!</h2>
                 <input onChange={handleEmailChange} type="email" name="" id="" placeholder='Your Email' />
                 <br />
                 <input onChange={handlePasswordChange} type="password" name="" id="" placeholder='Your Password' />
                 <br />
                <input onClick={handleRegistration} className='reg-submit' type="submit" value="Submit" />
            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
            <div className='text-danger'>------------or------------</div>
            </div>
            <button onClick={signInUsingGoogle} className="btn-google text-white"><i className="fab fa-google"></i> Google Sign In</button>
      </div>
    );
};

export default Register;