import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const AddEvent = ({ setShowModal }) => {

    const localUser = localStorage.getItem("username");

    const {register, handleSubmit} = useForm()

    const saveForm = async (data) => {

        // console.log(data)
        const url = 'http://localhost:5000/user/event/' + localUser;
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
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 max-h-screen mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-center w-full">
                                Add a new Event
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form
                                onSubmit={handleSubmit(saveForm)}
                                // encType="multipart/form-data" 
                                className='mx-10 flex flex-col justify-center'>

                                <div className='flex flex-row justify-between  m-2'>
                                    <label className='mx-4 font-Teko text-2xl'>Title</label>
                                    <input {...register("title", { required: true })} type='text' name='title' placeholder='title' className='mx-4 px-4'></input>
                                </div>
                                <div className='flex flex-row justify-between  m-2'>
                                    <label className='mx-4 font-Teko text-2xl'>Description</label>
                                    <textarea {...register("description", { required: true })} id="description" name="description" rows="4" cols="50" placeholder='Enter the event description' className='mx-4 px-4'></textarea>
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddEvent