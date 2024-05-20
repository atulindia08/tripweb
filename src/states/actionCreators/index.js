import axios from 'axios';
// import {useDispatch} from "react-redux"
import { useApi } from '../../cusomHooks/useApi';


export const loginUser = (userName, password, )=>{
    // const dispatch = useDispatch();
    // dispatch(showLoader(true))
    if(!(userName&& password)) {
        return(dispatch)=>{
         
               
                dispatch({
                    type:'SHOW_LOGIN',
                })
    
           
        }
    }
    return(dispatch)=>{
        useApi('http://localhost:3003/login', {userName, password}).then((res)=>{
           
            dispatch({
                type:'LOGIN',
                payload: {data:res.data[0]}
            })
        }).catch(err=> console.log(err))

       
    }
   
            
}

export const logoutUser = ()=>{
        return(dispatch) =>{
            dispatch({
                type:'LOGOUT',
            })
        }
}

export const showLoader = (loaderStatus)=>{

    return(dispatch)=>{
        if(loaderStatus){
            dispatch({
                type: 'SHOW_LOADER'
            })
            }else{
                dispatch({
                    type: 'HIDE_LOADER'
                })
            }
}

}


// const loginUser= ()=>{
//   Axios.get('https://hub.dummyapis.com/delay?seconds=1')  
// }