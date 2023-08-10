import { useState } from 'react';
import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import Typical from 'react-typical';

function Navbar() {
    const [username, setUserName] = useState('');

    
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
            <input type='text' placeholder='Enter User Name' onChange={(event)=>setUserName(event.target.value)}/>

            {(username) === ''  
                      ? <Link to='/holdprops'>
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
