import React, { useEffect, useState } from 'react'
import './ButtonStyle.css'

const FriendProfile = ({ friendUser }) => {

    const [friendProfile, setFriendProfile] = useState("")
    const localUser = localStorage.getItem("username");
    const [count, setCount] = useState(null)

    useEffect(() => {
        const fetchFriend = () => {
            fetch("http://localhost:5000/user/profile/" + friendUser)
                .then((response) => response.json())
                .then((data) => setFriendProfile(data));
        }
        const fetchCount = () => {
            fetch("http://localhost:5000/user/getCount/" + friendUser)
                .then((response) => response.json())
                .then((data) => setCount(data));
        }
        fetchFriend()
        fetchCount()
    }, []);

    const followFriend = () => {
        fetch("http://localhost:5000/user/follow/" + localUser + "/" + friendProfile.username)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <div className='bg-gray-900'>
            <div className='flex justify-center'>
                <img className='w-56 h-56 rounded-full object-cover mt-2'
                    src={friendProfile.imagePath} alt='profile-image' />
            </div>
            <div>
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h1 className='text-white font-extrabold text-6xl font-Michroma'>{friendProfile.name}</h1>
                    <p className='text-white text-center font-medium text-2xl mt-2 font-Michroma'>{friendProfile.username}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between mx-60 mt-5'>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Posts</h1>
                    <p className='text-white text-center text-2xl mt-4'>{count && count.postCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Likes</h1>
                    <p className='text-white text-center text-2xl mt-4'>{count && count.likeCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Followers</h1>
                    <p className='text-white text-center text-2xl mt-4'>{count && count.followerCount}</p>
                </div>
                <div>
                    <h1 className='text-white font-bold text-3xl'>Following</h1>
                    <p className='text-white text-center text-2xl mt-4'>{count && count.followingCount}</p>
                </div>
            </div>
            <div className='flex justify-center m-4'>
                <form className='flex flex-row w-1/2 justify-between mt-6'>
                    <div className='flex justify-start'>
                        <button className='text-white btnFollow' onClick={() => followFriend()}>Follow</button>
                    </div>
                    <div className='flex'>
                        <button className='text-white btnReport'>Report</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FriendProfile