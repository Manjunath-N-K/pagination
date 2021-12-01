import {useState,useEffect} from 'react'
import paginate from './util'
import employee from './data'
import axios from 'axios'

const url='https://dummy.restapiexample.com/api/v1/employees'

export function useFetch() {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const {id,employee_name,employee_salary,employee_age}=employee
   


//     const getEmployees=async()=>{
//         axios.get(url)
//         .then((response)=>{
//             console.log(response);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
// setData(paginate(employee))
// setLoading(false);
//     }

//     useFetch(()=>{
//         getEmployees();
//     },[])


useEffect(() => {
  setData(paginate(employee))
  setLoading(false);
}, [])




    return {
        
        loading,data,setData
    }
}


