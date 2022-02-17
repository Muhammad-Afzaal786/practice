import React, { useState } from 'react';

function About() {
  const[user , setUser]= useState(false)

  const AddData = (e)=>{
      e.preventDefault();
      console.log('Hello', user)
  }
  return (
    <div className='mt-5'>
  <form>
     <input type="checkbox" onChange={(e)=>setUser(e.target.checked)}/> <span>Add Checkbox</span>
     <button className='btn btn-primary' onClick={AddData}>Submit</button>
  </form>
  </div>
  );
}

export default About;


