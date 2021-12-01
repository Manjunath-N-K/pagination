import { useFetch } from "./useFetch";

const paginate=(employees)=>{
        
        const itemsPerPage=5;
        const numberofPages=Math.ceil(employees.length/itemsPerPage)
    
        const newEmployees=Array.from({length:numberofPages},(_,index)=>{
            const start=index*itemsPerPage
         return employees.slice(start,start+itemsPerPage);
 
           
        })
       
        return newEmployees
    }
  
    
    export default paginate







