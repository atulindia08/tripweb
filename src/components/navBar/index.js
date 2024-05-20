import React, { useState } from 'react'
import {useSelector} from 'react-redux';
import { actionCreators } from '../../states';
import {useDispatch} from 'react-redux'
import useTimeout from '../../cusomHooks/useTimeout';



function NavBar() {
    const [user, setUser] = useState(false);
    const userData = useSelector((state)=>state.userData);
    const [searchtext, setSearchText] = useState('')
    const dispatch = useDispatch();
    const login = ()=>{
       
        if(userData.isUserLoggedIn){
            dispatch(actionCreators.logoutUser());
        }else{
            dispatch(actionCreators.loginUser());
        }
        // setUser(true)
    }
    useTimeout(()=> console.log("api calling with - ", searchtext), 2000)
    // console.log("data++++", userData);
  return (
    <div className='h-16 w-screen bg-black/[.3] text-white p-5'>
        <ul className='flex'>
            <li className='w-14 cursor-pointer'>
                Home
            </li>
            <li className='w-32 cursor-pointer'>
                About Us
            </li>
            <li className='w-32 cursor-pointer'>
                Carrier
            </li>
            <li className='w-32 cursor-pointer'>
                Contact Us
            </li>
            <li className='w-32 cursor-pointer'>
                {userData.isUserLoggedIn ? 'User List' :'' }
            </li>
            <li className='w-64 ml-auto cursor-pointer'>
                <input type="text" className='rounded-md hover:bg-gray-500 pl-5 text-black' placeholder='Search' value={searchtext} onChange={(e)=>setSearchText(e.target.value)}/>
            </li>
            <li className='w-32 cursor-pointer' onClick={login}>
                {userData.isUserLoggedIn ? 'Logout' :'Login' }
            </li>
        </ul>
    </div>
  )
}

export default NavBar