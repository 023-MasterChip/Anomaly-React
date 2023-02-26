import React, { useState } from 'react'

const Settings = ({ setShowModal }) => {

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center w-full">
                Profile Settings
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className='w-full flex justify-center'>
                <img
                  className='w-20 h-20 object-cover rounded-full'
                  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt='user image'></img>
              </div>
              <form className='mx-10 flex flex-col justify-center'>
                <div className='flex flex-row justify-evenly m-2'>
                  <label className='mx-4 font-Teko text-2xl'>Name</label>
                  <input type='text' name='name' placeholder='Emma Carter' className='mx-4 px-4'></input>
                </div>
                <div className='flex flex-row justify-between  m-2'>
                  <label className='mx-4 font-Teko text-2xl'>Username</label>
                  <input type='text' name='username' placeholder='Emma.Artistry' className='mx-4 px-4'></input>
                </div>
                <div className='flex flex-row justify-between  m-2'>
                  <label className='mx-4 font-Teko text-2xl'>Email</label>
                  <input type='email' name='email' placeholder='emmacarter@gmail.com' className='mx-4 px-4'></input>
                </div>
              </form>
              <div>
                <button
                  className="flex justify-end w-full text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Edit
                </button>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="flex justify-start w-full text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                LOGOUT
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Settings