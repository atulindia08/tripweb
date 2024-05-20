import React, { useCallback, useEffect, useRef } from 'react'

function useTimeout(callback, delay) {

    const callBackRef = useRef(callback);
    const timeRef = useRef();

    useEffect(()=>{
        callBackRef.current = callback
    }, [callback]);

    const set = useCallback(()=>{
        timeRef.current = setTimeout(()=>{
            callBackRef.current()
        }, delay)
    })
   const clear = useCallback(()=>{
            timeRef.current && clearTimeout(timeRef.current)
   }, []) 

   useEffect(()=>{
    set();
    return clear;
   }, [delay, set, clear])
  return {clear}
}

export default useTimeout