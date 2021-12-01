import React,{useState,useEffect} from 'react'
import Employee from "./Employee";
import {useFetch} from "./useFetch";
import employees from './data'
import { Link } from 'react-router-dom';

function Home({employee,setEmployee}) {
    const {loading,data}=useFetch();
  const [page,setPage]=useState(0)
  
  const {id,employee_name,employee_salary,employee_age}=employees

  useEffect(() => {
    if(loading) return
    setEmployee(data[page])
    
  }, [loading,page])

  const handlePage=(index)=>{
    setPage(index);
  }

  const prevPage=()=>{
    setPage((oldPage)=>{
      let prevPage=oldPage-1;
      if(prevPage<0){
        prevPage=data.length-1
      }
      return prevPage;
    })
  }

  const nextPage=()=>{
    setPage((oldPage)=>{
      let nextPage=oldPage+1;
      if(nextPage>data.length-1){
        nextPage=0
      }
      return nextPage;
    })
  }

  const handleRemoveTask = (id) => {
    setEmployee(employee.filter((task) => task.id !== id));
  };


  return (
   <>
     <div className='section-title'>
          <h1>{loading ? 'loading':'Employee details'}</h1>
          
          <div className='underline'></div>
          <Link  to='/create' className='pag-btn'>cretae react</Link>
     </div>
<section className='employees'>
<div className='container'>
 
  {
employee.map((employee)=>{
  return <Employee key={employee.id} {...employee}  />
})
  }
</div>
{
  !loading &&(
    <div className='btn-container'>
      <button className='prev-btn' onClick={prevPage}>prev</button>
      {data.map((item,index)=>{
        return(
          <button key={index} className={`page-btn ${index===page ? 'active-btn':null}`}  onClick={()=>handlePage(index)}>
            {index+1}
          </button>
        )
      })}
      <button className='next-btn' onClick={nextPage}>next</button>

    </div>
  )
}
</section>

   </>
  );
}

export default Home
