import React,{useState} from 'react'
import { useParams,Link} from 'react-router-dom'
import data from './data'
import {useGlobalContext} from './context'


function SingleEmployee({employee,setEmployee}) {
    const {handleRemove}=useGlobalContext();
    //console.log(handleRemove);
    console.log(employee);
    
    const default_image='https://i.pravatar.cc/300'
    const {id}=useParams()
    console.log(id);
    
   console.log(employee[id]);
    const {employee_name,employee_salary,employee_age}=employee[id]
    
    
    const [isLogged,setLogged]=useState(true)

    return (
        <section className='single-employee'>
            <img src={default_image} alt={employee_name} />
            <div className='single-employee-info'>
                <h2><strong>Employee-Name</strong> : {employee_name}</h2>
                <p><strong>About</strong> : lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <h4><strong>Employee-Age</strong> : {employee_age} years</h4>
                <h4><strong>Employee-salary</strong> : {employee_salary}$</h4>
                {
                    !isLogged && <Link to='/' className='pag-btn' >
                    back to home
                </Link>
                
                }
                
                {isLogged && (
                    <div>
                         <Link to={`/${id}/edit`} className='pag-btn'>Edit </Link>
                          <button className='pag-btn'  >Delete</button>
                        </div>
                        
                
               
            )} 
            </div>
        </section>
    )
}

export default SingleEmployee
