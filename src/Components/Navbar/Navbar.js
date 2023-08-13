import { useState } from 'react';
import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import Typical from 'react-typical';

function Navbar() {
    
  const [gmail,setGmail] = useState()
  const [validategmail,setValidateGmail] = useState(false);

  const handleGmail = (event) =>{
    setGmail(gmail)
    let enterGmail = event.target.value;
    setGmail(enterGmail);
    setValidateGmail(handleValidateGmail(enterGmail));
  }

  const handleValidateGmail = (user) =>{
    const gmailPattern = /^[a-zA-Z0-9]{2,}[0-9]{0,}@gmail.com{1}$/
    return gmailPattern.test(user);

  }
    
  return (
    <div className='container'>
        <div className='title-container'>
            <div className='title'>
              <h1>Hello, Welcome To StartUp & Co</h1>
              <p>
                <Typical 
                   loop={3}
                   wrapper='b'
                   steps={[
                    "Please Subscribe to visit website",
                    1000
                   ]}
                />

              </p>
            </div>
        </div>
        <div className='signup-container'>
            <input type='text' placeholder='Enter G-Mail' onChange={handleGmail}/>{validategmail ? null: <span className='invalid-gmail'>Invalid G-Mail</span>}


            {(validategmail) === false 
                      ? 
                      <Link to='/holdprops'>
                         <button disabled>Subscribe</button>
                      </Link> 
                      
                      : <Link to='/holdprops'>
                         <button>Subscribe</button>
                      </Link> 
            }      
        </div>
        
        
        
    </div>
  )
}

export default Navbar
