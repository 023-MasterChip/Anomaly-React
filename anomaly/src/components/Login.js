import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const saveForm = async (data) => {

        // console.log(data)
        const url = 'http://localhost:5000/user/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            alert("login failed")
            return;
        } else {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify({ token: data.token }));
            localStorage.setItem('username', data.name);
            localStorage.setItem('userImage', data.imagePath);
            navigate("/home");
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveForm)} className='mx-10 flex flex-col justify-center'>
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
                        className="flex justify-center mx-auto font-Teko text-2xl log"
                        type="submit"
                    // onClick={() => setShowModal(false)}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login