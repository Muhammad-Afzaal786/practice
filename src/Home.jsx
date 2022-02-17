import React, { useState } from 'react';

function Home() {
  const [count , setCount] = useState(0)

  const Incremnt = ()=>{
    if(count < 30){
      setCount(count +1)
    }else{
      setCount(30)
    }
   
  }
  const decremnt = ()=>{
    if(count > 0){
      setCount(count -1)
    }else{
      setCount(0)
    }
  }
  return (
    <div className='text-center mt-5'>
                       <h1>{count}</h1>     
      <div className='d-flex justify-content-center mt-5'>
      <div><button className='btn btn-success' onClick={Incremnt}>Increament</button></div>
      <div><button className='btn btn-primary mx-3' onClick={decremnt}>Decreament</button></div>
      <div><button className='btn btn-info mx-3' onClick={decremnt} disabled={count === 0 }>Decreament</button></div>
      </div>
  </div>
  );
}

export default Home;
