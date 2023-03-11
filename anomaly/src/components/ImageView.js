import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ImageView = ({ setShowModal, posts }) => {

    const navigate = useNavigate()
    return (
        <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className="relative w-auto my-6 mx-auto max-w-3xl bg-gray-600 rounded-md">
                    {/*content*/}
                    <div className='flex flex-row m-5'>
                        <div>
                            <img className='w-auto h-auto object-fill'
                                src={posts.image} alt='' />
                        </div>
                        <div className='flex flex-col justify-center items-center ml-5 w-52'>
                            <div class="rounded-full h-44 w-44 bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={posts.userImage} alt="profilepic" />
                            </div>
                            <div className='flex flex-col-reverse justify-center text-center mx-2'>
                                <span class="pt-1 font-bold font-mono text-sm text-gray-300">{posts.user}</span>
                                <span class="pt-1 font-bold font-Michroma text-lg text-gray-100">{posts.title}</span>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <button
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                    onClick={()=>navigate(`/friend/${posts.user}`)}
                                >
                                    View Profile
                                </button>
                                <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ImageView