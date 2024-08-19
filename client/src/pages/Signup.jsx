
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [errorMessage, setErrorMessage]=useState(null);
  const [loading, setLoading ]=useState(false);
  const [formData, setFormData] = useState({});
  const navigate= useNavigate();
  const handleChange=(e) =>{
    setFormData({...formData,[e.target.id]: e.target.value.trim() });
  }; 
  // console.log(formData);
  const handleSubmit= async (e) =>{
 e.preventDefault();
 if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('fill out all fields');
 }

     try{  setLoading(true);
           setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success===false){
         return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
     } catch(error){
      //  console.error(error);
      setErrorMessage(error.message); 
      setLoading(false);
     } 

  };
  return (
  <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      {/* lift side */}
      <div className='flex-1'>
      <Link
        to='/'
        className='font-bold dark:text-white text-4xl'
      >
        <span className='px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Karan's
        </span>
        Blog.
      </Link>
      <p className='text-sm mt-5'>
        this tejfnjnnlknkndq jwkdbwehjbfqh
        jebflkjweb fhjqwebfh qebfqhjebhjkbhjb
      </p>
      </div>
      {/* right side */}

      <div className='flex-1'>
       <form className='flex flex-col gap-4'onSubmit={handleSubmit}>
        <div className="">
          <Label value='Your user name '/>
          <TextInput type='text' placeholder='Username' id='Username' onChange={handleChange}>
          </TextInput>
        </div>
        <div className="">
          <Label value='Your email'/>
          <TextInput type='email' placeholder='name@company.com' id='Email' onChange={handleChange}>
          </TextInput>
        </div>
        <div className="">
          <Label value='Your password'/>
          <TextInput type='password' placeholder='Password' id='Password' onChange={handleChange}>
          </TextInput>
        </div> 
        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
          {
            loading ? (
              <>
              <Spinner size='sm'/>
              <span className='pl-3'>Loading...</span>
              </>
            ):('Sign up')
          }
        </Button>
       </form>
       <div className="flex gap-2 text-sm mt-5">
        <span>Have an account?</span>
        <Link to='/signin' className='text-blue-500'>
        Sign In</Link>
       </div>
       {
        errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )
       }
      </div>
      
    </div>
    </div>

  );
}
