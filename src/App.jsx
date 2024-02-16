 import React from 'react'
import Navbar from './components/Navbar'
 
import { Button } from '@mui/material'
import DataTable from './components/Datatable'
import RecipeReviewCard from './Card'
 
 const App = () => {

     
  

  function New(){
    var y = 50;
      console.log("out")
    function Cat(){
      console.log(y)
    }

    return Cat;
  }

  let NewOne2 = New()



  console.log(NewOne2())

   

   

   


   return (
     <div>
       <Navbar/>
       
 


  <DataTable/>
  <RecipeReviewCard/>
  
     </div>
   )
 }
 
 export default App