import React, { useEffect, useState } from 'react'

const UserProfile = () => {

    const [userProfile, setUserProfile] = useState([])
    const [userData,setUserData] = useState("")
    const user = localStorage.getItem("username");

    useEffect(() => {
        const fetchProfile = async (profile) => {
            try {
                const username = localStorage.getItem("username");
                // console.log(username)
                const url = 'http://localhost:5000/user/profile/' + username;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(profile)
                });
                if (response.ok) {
                    const profile = await response.json();
                    setUserProfile(profile);
                    console.log(profile);
                } else {
                    throw new Error('Failed to fetch profile data');
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchProfile();
    }, []);

    useEffect(()=>{
        fetch("http://localhost:5000/user/getCount/" + user)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    },[])

    return (
        <div className='bg-gray-900'>
            <div className='flex justify-center'>
                <img className='w-60 h-60 rounded-full object-cover mt-2'
                    src={userProfile.imagePath} alt='profile-image' />
            </div>
            <div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h1 className='text-white font-extrabold text-6xl font-Michroma'>{userProfile.name}</h1>
                    <p className='text-white text-center font-medium text-2xl mt-2 font-Michroma'>{userProfile.username}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between mx-60 mt-5'>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Posts</h1>
                    <p className='text-white text-center text-2xl mt-4'>{userData.postCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Likes</h1>
                    <p className='text-white text-center text-2xl mt-4'>{userData.likeCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Followers</h1>
                    <p className='text-white text-center text-2xl mt-4'>{userData.followerCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Following</h1>
                    <p className='text-white text-center text-2xl mt-4'>{userData.followingCount}</p>
                </div>
                {/* <div>
                    <h1 className='text-white font-bold text-3xl'>Events</h1>
                    <p className='text-white text-center text-2xl mt-4'>147</p>
                </div> */}
            </div>
        </div>
    )
}

export default UserProfile