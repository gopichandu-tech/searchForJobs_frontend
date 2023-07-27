import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import PropsData from '../props/propsData'
import './holdProps.css'
import logo from '../sub-images/company_logo.png'

function HoldProps() {
    const [search,setSearch] = useState(PropsData);
    const navigate = useNavigate();

    const handleFilters = (filter) =>{
        const updateItems = PropsData.filter((item)=>{
            return item.work_from === filter;
        })
        setSearch(updateItems);
    }

    const handleChange = (event) =>{
        let value = event.target.value;
        let result = [];
        result = PropsData.filter((item)=>{
            return value.roleName === '' ? item : item.roleName.toLowerCase().includes(value.toLowerCase());
        })
        setSearch(result);
        console.log(result)
    }
  return (
    <div className='body-container'>
        <section className='body-container-next'>
            
        <div className='sub-conatiner'>
            <img className='logo' src={logo} alt='logo' onClick={()=>navigate("/")}/>
            <input type='text' className='search-box' placeholder='search by role name ' onChange={handleChange}/>
        </div>

        <div className='filters'>
            <div onClick={()=>handleFilters('Remote')}>Remote</div>
            <div onClick={()=>handleFilters('Hybrid')}>Hybrid</div>
            <div onClick={()=>handleFilters('On-site')}>On-Site</div>
        </div>
         
        <div className='main-conatiner'>
                {
                    search.map((item,key_value)=>{
                        return(     
                            <div className='conatiner' key={key_value}>

                                <img src={item.img} alt='company_logo' />

                                <div className='companyName_roleName'>
                                    <div>{item.company_title}</div>
                                    <div>{item.roleName}</div>
                                </div>
            
                                <div className='posted_numberOfApplications'>
                                    <div>posted : {item.posted}</div>
                                    <div>{item.Applications} applications</div>
                                </div>
            
                                <div className='workLocation_status'>
                                    <div>{item.location}</div>
                                    {item.status === 'Actively recruiting' ? <div className='active'>{item.status}</div> : <div className='non-active'>{item.status}</div>}   
                                </div>
            
                                <div className='requiredSkills'>
                                    <div id='skills'>{item.skills.skill1}</div>
                                    <div id='skills'>{item.skills.skill2}</div>
                                    <div id='skills'>{item.skills.skill3}</div>
                                    <div id='skills'>{item.skills.Skill4}</div>
                                </div>

                                {
                                    item.status === 'Actively recruiting' ?
                                        <Link to='/application' >
                                            <button  className='apply-button'>Apply</button>
                                        </Link> 
                                    :  
                                        <div className='applicationClosed-button'>Closed</div>
                                }

                                
            
                            </div>
                            
                            
                        )
                    })
                }   
        </div>
        </section>
    </div>
  )
}

export default HoldProps;
