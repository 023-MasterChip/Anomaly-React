import React from 'react'

const UserProfile = () => {
    return (
        <div className='bg-gray-900'>
            <div className='flex justify-center'>
                <img className='w-60 h-60 rounded-full object-cover mt-2'
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='profile-image' />
            </div>
            <div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h1 className='text-white font-extrabold text-6xl font-Michroma'>Emma Carter</h1>
                    <p className='text-white text-center font-medium text-2xl mt-2 font-Michroma'>Emma.Artistry</p>
                </div>
            </div>
            <div className='flex flex-row justify-between mx-60 mt-5'>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Posts</h1>
                    <p className='text-white text-center text-2xl mt-4'>541</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Likes</h1>
                    <p className='text-white text-center text-2xl mt-4'>13K</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Followers</h1>
                    <p className='text-white text-center text-2xl mt-4'>2K</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Following</h1>
                    <p className='text-white text-center text-2xl mt-4'>1.6K</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Events</h1>
                    <p className='text-white text-center text-2xl mt-4'>147</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile