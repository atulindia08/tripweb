import React, { useEffect, useRef, useState } from 'react'
import useTimeout from '../../cusomHooks/useTimeout'

function Test1() {
    // const [count, setCount] = useState(0);
// +++++++++++++++++++++++ test function1
    // useEffect(()=>{
    //     var intervalId = setInterval(()=>{
    //         setCount(count+1);
    //         console.log(count)
    //     },5000);
    //     return ()=>{
    //         clearInterval(intervalId)
    //     }
    // }, [count])
// +++++++++++++++++++++++++++++ test function 2
    // useEffect(()=>{
    //   console.log("firtst useEfefct")
    // }, [])
    // useEffect(()=>{
    //   console.log("second useEfefct")
    // }, [])
    // ++++++++++++++++++++++++++ test function3

    // const ref1 = useRef(2);
    // const ref2 = useRef(()=>console.log('user'));
    // console.log(ref1, ref2)

    // +++++++++++++++++++++++++++++++++++++ test function4

      const [count, setCount] = useState(10)
      const [searchtext, setSearchtext] = useState('')
   const clear = useTimeout(()=> console.log("api call"), 1000)
  return (
    <div>Test 1 - Count {count} 
    <button onClick={()=>setCount(c=>c+1)}>Increase</button>

    <input type="text" value={searchtext} onChange={(e)=>setSearchtext(e.target.value)}/>

    </div>
  )
}

export default Test1