import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {
  const {register, handleSubmit} = useForm();

  const saveForm = async (data) => {
 
    // console.log(data)
    const url = 'http://localhost:5000/user/signup';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const err = await response.json();
      console.log('Looks like there was a problem.',
        err);
      return;
    } else {
      const data = await response.json();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(saveForm)} className='mx-10 flex flex-col justify-center'>
        <div className='flex flex-row justify-between  m-2'>
          <label className='mx-4 font-Teko text-4xl'>Email</label>
          <input {...register("email", { required: true })}
            type='text' name='email' placeholder='email'
            className='mx-4 px-4 font-Teko text-2xl'></input>
        </div>
        <div className='flex flex-row justify-between  m-2'>
          <label className='mx-4 font-Teko text-4xl'>Name</label>
          <input {...register("name", { required: true })} type='text' name='name' placeholder='name' className='mx-4 px-4 font-Teko text-2xl'></input>
        </div>
        <div className='flex flex-row justify-between  m-2'>
          <label className='mx-4 font-Teko text-4xl'>Username</label>
          <input {...register("username", { required: true })} type='text' name='username' placeholder='username' className='mx-4 px-4 font-Teko text-2xl'></input>
        </div>
        <div className='flex flex-row justify-between  m-2'>
          <label className='mx-4 font-Teko text-4xl'>Password</label>
          <input {...register("password", { required: true })} type='password' name='password' placeholder='password' className='mx-4 px-4 font-Teko text-2xl'></input>
        </div>
        <div className='flex justify-center'>
          <button
            className="items-center mx-auto font-Teko text-2xl log"
            type="submit"
          // onClick={() => setShowModal(false)}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup