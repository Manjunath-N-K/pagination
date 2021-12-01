import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {useGlobalContext} from './context'
import data from './data'
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
    console.log(props);

const [employee,setEmployee]=useState({
    employee_name:props.employee?props.employee.employee_name:'',
    employee_age:props.employee?props.employee_age:'',
    employee_salary:props.employee_age?props.employee_salary:''
});

const [errorMsg, setErrorMsg] = useState('');
const {employee_name,employee_age,employee_salary}=employee

 

const handleSubmit=(e)=>{
e.preventDefault();
const values=[employee_name, employee_age, employee_salary];
let errorMsg='';

const allFieldsFilled=values.every((field)=>{
    const value=`${field}`.trim();
    return value!== '' && value!=='0';
});

if(allFieldsFilled){
    const employee={
        id:uuidv4(),
        employee_name,
         employee_salary,
         employee_age
    };
    console.log('value0',employee);
    props.handleOnSubmit(employee);
}else{
    errorMsg='pls fill out all fields'
}
setErrorMsg(errorMsg)
}

const handleInputChange=(e)=>{
    const {name,value}=e.target;
    
    console.log(value);
    switch (name) {
       
    
        default:
            setEmployee((prevState)=>({
                ...prevState,[name]:value
            }));
           
    }
};

    return (
        <form onSubmit={handleSubmit}>
           
    <input type='text' placeholder='Enter the name' name= 'employee_name'  value={ employee_name} onChange={handleInputChange}/>
    <input type='number' placeholder='Enter the age' name= 'employee_age' value={ employee_age} onChange={handleInputChange}/>
    <input type='number' placeholder='Enter the salary' name='employee_salary' value={ employee_salary} onChange={handleInputChange}/>
    <button className='pag-btn'>Submit</button>
    
        </form>
    )
    }

export default Form


// import React, { useState } from 'react'

// function Form(props) {
//     const [task, setTask] = useState({
//     employee_name: props.task ? props.task.employee_name : '',
//     employee_age: props.task ? props.task.employee_age : '',
//    employee_salary: props.task ? props.task.employee_salary : '',
//   });

//   const [errorMsg,setErroMsg]=useState('');
//   const {employee_name,employee_age,employee_salary}=task;

//   const handleSubmit=(e)=>{
// e.preventDefault();
//   }

//   const handleInputChange=(e)=>{
//       console.log('input chnage');
//   }

//     return (
//    <form onSubmit={handleSubmit}>
//        <input type='text' name='employee_name' ></input>
//        <input ></input>

//    </form>
//     )
// }

// export default Form
