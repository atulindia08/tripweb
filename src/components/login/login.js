import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../states';
import {useFormik} from 'formik'

function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const formik = useFormik({
    initialValues: {
      Name:'',
    },
    onSubmit: (values) => console.log('form value', formik, values),
    validate: (values)=>{
      let errors = {}
      if(!values.Name){
        errors.Name = 'Required'
      }
      return errors
      
    }

  })
  const submit = (event, formData) => {
    event.preventDefault();
    
      dispatch(actionCreators.loginUser(userName, password));
   


  }
  console.log('erros', formik.errors)
  return (
    <div className='h-screen flex items-center justify-center '>
      <form onSubmit={formik.handleSubmit}>
        <div className='loginWrapper border-0 border-gray-400 w-64 h-64 rounded-md p-4 bg-zinc-950/[.3]'>
          <label className='text-gray-200' htmlFor='Name'>Name</label>
          <input type="text" className='border-2 border-gray-400 border-solid bg-sky-500/[.06] rounded-md text-gray-100' 
          placeholder='Name' value={formik.values.Name} name='Name' id="Name"
           onChange={formik.handleChange
           } />
           {formik.errors.Name ? <div className='text-red-500'>{formik.errors.Name}</div> : null}
          <label className='text-gray-200' htmlFor='password'>Password</label>
          <input type="password" className='border-2 border-gray-400 border-solid bg-sky-500/[.06] rounded-md text-gray-100'
           placeholder='Password' passowrd='password' id='password'
           value={formik.values.password} onChange={formik.handleChange}
            />
          <button type="submit" className='border-2 border-gray-400 border-solid bg-sky-500/[.06] rounded-md text-gray-100 mt-5 hover:bg-sky-800/[.6] p-1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login