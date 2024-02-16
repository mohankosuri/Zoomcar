 import React from 'react'
import Navbar from './components/Navbar'
 
import { Button } from '@mui/material'
import DataTable from './components/Datatable'
import RecipeReviewCard from './Card'
 
 const App = () => {

     
  var x = 20;

  function New(){
    var y = 50;
      console.log("out")
    function Cat(){
      console.log(y)
    }

    return Cat;
  }

  let NewOne = New()



  console.log(NewOne())

   

   

   


   return (
     <div>
       <Navbar/>
       
 


  <DataTable/>
  <RecipeReviewCard/>
  
     </div>
   )
 }
 
 export default App