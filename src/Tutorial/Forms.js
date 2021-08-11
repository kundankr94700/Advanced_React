import React,{useState} from 'react'
//we want to have input field
//want to have button
//one of the input should accept username
//email
//accept the data and store in some variable
//initial value empty
function Forms() {
    // const [name,setName]=useState('kundan')    // if we will give initial value to name and email it will be printed in texted as it is
    // const [email,setEmail]=useState('kk@gmail')// 
    const [name,setName]=useState('')    //
    const [email,setEmail]=useState('')
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        var firstname=document.getElementById('firstname').value;   //one way 
        var emailaddress=document.getElementById('email').value;
        
        console.log(firstname);
        console.log(email);
    }
    const firstName=(event)=>{
        setName(event.target.value)
    }
    return (
        <>
           <article>
               <form className='form' onSubmit={handleSubmit}>
               <div className='form-control'>
                   <label htmlFor='firstName'>Name:</label>
                   <input type='text' id='firstname' name='firstname' value={name} onChange={(e)=>setName(e.target.value)}></input> {/*if you assign value you can change the value without onChange*/}
               </div>
               <div className='form-control'>
                   <label htmlFor='email'>Email:</label>
                   <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
               </div>
               <button type='submit'>Submit</button>
               </form>
               
           </article>
        </>
    )
}

export default Forms
