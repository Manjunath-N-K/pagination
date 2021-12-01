import React,{useState} from 'react'
import data from './data'
import Form from './Form';

function AddEmployee({history,employee,setEmployee}) {
    const handleOnSubmit=((employees)=>{
        setEmployee([employees,...employee]);
        history.push('/');  
    })

    return (
        <React.Fragment>
            <Form handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddEmployee
