import React ,{useState,useEffect,useContext} from 'react'
import { useFetch } from './useFetch'
import data from './data'

const AppContext=React.createContext()


const AppProvider=({children})=>{
    const [employee,setEmployee]=data;

       const handleRemove=(id)=>{
       setEmployee(employee.filter((emp)=>emp.id!==id));   
   }
    
    return(
        <AppContext.Provider value={handleRemove} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}

