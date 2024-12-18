
import { Stack } from '@mui/material';
import './App.css'
import TextField from '@mui/material/TextField'; //Material UI=Component API
import { useState } from 'react';


function App() {

  const[amount,setAmount]=useState("")
  const[rate,setRate]=useState("")   
  const[year,setYear]=useState("")
  const[interest, setInterest]=useState(0)
  

  const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
  const[isInvalidRate,setIsInvalidRate]=useState(false)
  const[isInvalidYear,setIsInvalidYear]=useState(false)

  const validRegex=/^[0-9]*.?[0-9]+$/
  

  const validateInput=(e)=>{
    console.log(e); 

    const {name,value}=e.target
    console.log(name,value);

    if (name=='principle'){
      setAmount(value)
    }
    else if (name=='interest'){
      setRate(value)
    }
    else{
      setYear(value)
    }  
    
    if(validRegex.test(value) || value==""){
      if(name=='principle'){
        setIsInvalidPrinciple(false)
      }
      else if(name=='interest'){
        setIsInvalidRate(false)
      }
      else{
        setIsInvalidYear(false)
      }
    }
    else{
      if(name=='principle'){
        setIsInvalidPrinciple(true)
      }
      else if(name=='interest'){
        setIsInvalidRate(true)
      }
      else{
        setIsInvalidYear(true)
      }

    }
    

  }
  const handleCalculate=(e)=>{
    e.preventDefault() 
    console.log('calculate simple interest');
    if(amount && rate && year){
      setInterest((amount*rate*year)/100)


    }
    else{
      alert('please enter the field completely')
    }      
     
  }
  const handleReset=()=>{
    setAmount("")
    setRate("")
    setYear("")
    setInterest(0)
    isInvalidPrinciple(false)
    isInvalidRate(false)
    isInvalidYear(false)
  }
  
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', backgroundColor:'black', width:'100%', height:'585px'}}>
    <div style={{width:'500px', height:'550px', backgroundColor:'white', borderRadius:'10px',marginTop:'20px'}}>
    <h3 style={{marginTop:'30px' ,marginLeft:'30px'}}>Simple Interest Calculator</h3>
    <h6 style={{marginLeft:'30px'}}>Calculate Your Simple Interest Easily</h6>
    <div style={{backgroundColor:'greenyellow',width:'430px', height:'150px',marginLeft:'30px', borderRadius:'10px', textAlign:'center'}}>
      <h1 style={{paddingTop:'27px'}}>&#8377;{interest}</h1>
      <h4>Total Simple Interest</h4>
      </div> 

      <form>
      <div style={{marginLeft:'30px', marginTop:'20px'}}>
      <TextField onChange={validateInput} value={amount || ""} id="principle_amount" name='principle' label="Amount" variant="outlined" style={{width:'430px'}} />  
      </div>
      {
        isInvalidPrinciple &&
        <p style={{marginLeft:'30px', color:'red', fontWeight:'500'}}>Invalid Principle Amount</p>
      }

      <div style={{marginLeft:'30px', marginTop:'10px'}}>
      <TextField onChange={validateInput} value={rate || ""} id="interest_rate" name='interest' label="Rate" variant="outlined" style={{width:'430px'}}/>  
      </div>
      {
        isInvalidRate &&
        <p style={{marginLeft:'30px', color:'red', fontWeight:'500'}}>Invalid Principle Amount</p>
      }

      <div style={{marginLeft:'30px', marginTop:'10px'}}>
      <TextField onChange={validateInput} value={year || ""} id="time_period" name='period' label="Year" variant="outlined" style={{width:'430px'}} />  
      </div>
      {
        isInvalidYear &&
        <p style={{marginLeft:'30px', color:'red', fontWeight:'200'}}>Invalid Principle Amount</p>
      }
      </form>

      <Stack direction="row" spacing={2} style={{marginLeft:'30px', marginTop:'10px'}}>
        <button type='submit' onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} className="bg-dark me-3" variant='contained' style={{width:'207px',borderRadius:'5px'}} >Calculate</button>
        <button onClick={handleReset}  className="bg-lite me-3" style={{width:'207px',height:'50px',borderRadius:'5px'}}>Reset</button>
      </Stack>
        
      
      
      </div>  
      
      </div>  
      
    </>
  )
}

export default App
