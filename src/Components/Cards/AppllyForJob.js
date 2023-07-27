import React, { useState } from 'react'
import './ApplyForJob.css'

function AppllyForJob() {

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [validateemail,setValiDateEmail] = useState(true);
  const [username,setUserName] = useState('');
  const [resumefile,setResumeFile] = useState('');
  const [click,setClick] = useState(false);

  const handleClick = () =>{
    setClick(true);
  }


  const handleEmail = (event) =>{
    let enterEmial = event.target.value;
    setEmail(enterEmial); 
    setValiDateEmail(validateEmail(enterEmial));
  }

  const validateEmail = (email) =>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const handleUserName = (event) =>{
    let enterUserName = event.target.value;
    setUserName(enterUserName); 
  }

  //upload resume
  const handleUploadFile = (event) =>{
    const file = event.target.value;
    setResumeFile(file);
  }

  const handleEnterPassword = (event) =>{
    const enterPassword = event.target.value;
    setPassword(enterPassword);
  }
  return (
    <div>
      <div className='application-container'>

        <div className='details-container'>
            <input type='text' placeholder='Username' onChange={handleUserName}/>
            <input type='email' placeholder='E-mail' onChange={handleEmail}/>{validateemail ? null : <span className='invalid'>inavlid mail</span>}
            <input type='password' placeholder='create password'  onChange={handleEnterPassword}/>
            <label htmlFor="uploadresume">Upload Resume</label>
            <input type='file' onChange={handleUploadFile} />
            {(username && email && password && resumefile) === '' ? <span className='invalid'>Fill the inputs</span> : <button className='apply-button' onClick={handleClick}>Submilt</button>}
            {click === true ? <p>Application Submitted Successfully</p> : null}    
        </div>
      
    </div>
    </div>
  )
}

export default AppllyForJob
