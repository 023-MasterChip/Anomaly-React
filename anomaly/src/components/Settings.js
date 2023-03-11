import React, { useEffect, useState } from 'react'
import ProfileModal from './ProfileModal';
// import { useNavigate } from 'react-router-dom'

const Settings = ({ setShowModal }) => {

  const localUser = localStorage.getItem("username");

  const [userProfile, setUserProfile] = useState([])
  const [showProfileModal, setShowProfileModal] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
  });



  // const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()   // navigate('/index')

    window.location.reload()
  }

  useEffect(() => {
    const fetchProfile = async (profile) => {
      try {
        // const localUser = localStorage.getItem("username");
        // console.log(username)
        const url = 'http://localhost:5000/user/profile/' + localUser
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(profile)
        });
        if (response.ok) {
          const profile = await response.json()
          setUserProfile(profile)
          // console.log(profile)
        } else {
          throw new Error('Failed to fetch profile data')
        }
      } catch (err) {
        console.log(err.message)
      }
    };
    fetchProfile()


  }, [])

  // Update func
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      email: form.email,
    }
    console.log(editedPerson)

    // This will send a post request to update the data in the database.
    const response = await fetch('http://localhost:5000/user/update/' + localUser, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      setShowModal(false)
      window.location.reload()
    }

    // navigate("/");
  }
  return (
    <>
      {showProfileModal ? <ProfileModal setShowProfileModal={setShowProfileModal} /> : null}
      <div className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 ${showProfileModal ? "" : "z-50"} outline-none focus:outline-none`}>
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
                  onClick={() => setShowProfileModal(true)}
                  className='w-20 h-20 object-cover rounded-full'
                  src={userProfile.imagePath}
                  alt='user image'
                />
              </div>
              <form onSubmit={onSubmit} className='mx-10 flex flex-col justify-center'>
                <div className='flex flex-row justify-center m-2'>
                  {/* <label className='mx-4 font-Teko text-2xl'>Username</label> */}
                  <label className='flex justify-center mx-4 font-Teko text-2xl'>{userProfile.username}</label>
                </div>
                <div className='flex flex-row justify-evenly m-2'>
                  <label className='mx-4 font-Teko text-2xl'>Name</label>
                  <input type='text' name='name' placeholder={userProfile.name} onChange={(e) => updateForm({ name: e.target.value })} className='mx-4 px-4'></input>
                </div>
                <div className='flex flex-row justify-between  m-2'>
                  <label className='mx-4 font-Teko text-2xl'>Email</label>
                  <input type='email' name='email' placeholder={userProfile.email} onChange={(e) => updateForm({ email: e.target.value })} className='mx-4 px-4'></input>
                </div>
                <div className='flex justify-center'>
                  <div>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="flex justify-start w-full text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleLogout()}
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
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Settings