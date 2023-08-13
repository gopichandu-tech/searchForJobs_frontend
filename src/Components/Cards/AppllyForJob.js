import React, { useState } from 'react'
import './ApplyForJob.css'

function AppllyForJob() {

  const [password,setPassword] = useState('');
  const [validatepassword,setValidatePassword] = useState(false);

  const [email,setEmail] = useState('');
  const [validateemail,setValiDateEmail] = useState(false);

  const [username,setUserName] = useState('');
  const [validateusername, setValidateUserName] = useState(false);

  const [resumefile,setResumeFile] = useState(false);
  const [click,setClick] = useState(false);

  const handleClick = () =>{
    setClick(true);
  }


  /*Checking For Email */
  const handleEmail = (event) =>{
    setEmail(email)
    let enterEmial = event.target.value;
    setEmail(enterEmial); 
    setValiDateEmail(validateEmail(enterEmial));
  }

  const validateEmail = (enteremail) =>{
    const emailPattern = /^[a-zA-Z0-9]{2,}[0-9]{0,}@gmail.com{1}$/;/*/^[^\s@]+@[^\s@]+\.[^\s@]+$/*/
    return emailPattern.test(enteremail);
  }

  /*Checking For UserName */
  const handleUserName = (event) =>{
    setUserName(username)
    let enterUserName = event.target.value;
    setUserName(enterUserName); 
    setValidateUserName(handlevalidateUserName(enterUserName));
  }

  const handlevalidateUserName = (enterusername) =>{
    const usernamePattern = /[a-zA-Z]{3,}/;
    return usernamePattern.test(enterusername);
  }

  /* Checking For Uploading Resume */
  const handleUploadFile = (event) =>{
    const file = event.target.value;
    setResumeFile(file,true);
  }

  /* Checking For Password */

  const handleEnterPassword = (event) =>{
    setPassword(password)
    const enterPassword = event.target.value;
    setPassword(enterPassword);
    setValidatePassword(handlevalidatePassword(enterPassword))
  }
  const handlevalidatePassword = (enterpassword) =>{
    const passwordPattern = /[a-z]{1,}[A-Z]{1,}[0-9]{1,}/;
    return passwordPattern.test(enterpassword);
  }

  return (
    <div>
     
      <div className='application-container'>
      <div className='heading-title'>Apply With StartUp & Co</div>
         
        <div className='details-container'>
            <input type='text' placeholder='Username' onChange={handleUserName}/>{validateusername ? null : <span className='invalid'>Minimum 3 characters</span>}
            <input type='email' placeholder='E-mail' onChange={handleEmail}/>{validateemail ? null : <span className='invalid'>inavlid mail</span>}
            <input type='password' placeholder='create password'  onChange={handleEnterPassword}/>{validatepassword ? null : <span className='invalid'>password contains atleast one Uppercase one Lowercase and one number</span>}
            <label htmlFor="uploadresume">Upload Resume</label>
            <input type='file' name='Upload' accept='application/pdf' onChange={handleUploadFile} />
            {(validateusername && validateemail && validatepassword && resumefile) === false ? <span className='invalid'>Fill the inputs</span> : <button className='apply-button' onClick={handleClick}>Submilt</button>}
            {click === true && (validateusername && validateemail && validatepassword && resumefile) === true ? <p>Application Submitted Successfully</p> : null}    
        </div>
      
    </div>
    </div>
  )
}

export default AppllyForJob
