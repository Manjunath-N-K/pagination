import React from 'react'
import { Link } from 'react-router-dom'

function Employee({id,employee_name}) {
    
   
      const default_image='https://i.pravatar.cc/300'
    return (
        <Link to={`/employees/${id}`} key={id}   >
        <article className='card'> 
            <img src={ default_image} alt={employee_name}/>
            <h4>{employee_name}</h4>
            <a href='' className='btn'>View profile</a>
        </article>
        </Link>
        
    )
}

export default Employee
