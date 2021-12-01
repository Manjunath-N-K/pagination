import React,{useState} from 'react'
import { Route, Switch } from 'react-router'
import Employee from './Employee'
import Form from './Form'
import Home from './Home'
import SingleEmployee from './SingleEmployee'
import Edit from './Edit'
import data from './data'
import AddEmployee from './AddEmployee'


function App() {
  const [employee,setEmployee]=useState(data)
  console.log(employee);
  
  return (
  <Switch>
    <Route render={(props)=>(<Home {...props} employee={employee} setEmployee={setEmployee} />)} path='/' exact />
       
     <Route render={(props)=>(<SingleEmployee {...props} employee={employee} setEmployee={setEmployee} />)} path='/employees/:id' />  
   
    
    <Route  render={(props)=>(<Edit {...props} employee={employee} setEmployee={setEmployee} />)} path='/:id/edit' exact />
      
   
    <Route render={(props)=>(<AddEmployee {...props} employee={employee} setEmployee={setEmployee} />)}
      path='/create' />
       
   

  </Switch>
  )
}

export default App
