import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid';
import { useParams } from "react-router-dom";
import FriendProfile from '../components/FriendProfile';

const Friend = () => {
    const [comp, setComp] = useState(0);
    const user = localStorage.getItem("username")
    console.log(user)
    const [posts, setPosts] = useState([])
    const { friendUser } = useParams();

    useEffect(() => {
        getUserPosts();
    }, [])

    const getUserPosts = async () => {
        // const userId = localStorage.getItem("userId");
        fetch("http://localhost:5000/user/posts/" + friendUser)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    };

    const CompSwitch = () => {
        if (comp === 0) {
            return <FriendProfile friendUser={friendUser}/>
        }
        if (comp === 1) {
            return <ImageGrid posts={posts} />
        }
    }



    return (
        <div className='flex flex-col fixed w-full bg-gray-900'>
            <Navbar />
            <div className='flex flex-col w-full h-screen bg-gray-900'>
                <div className='bg-gray-900 w-full h-auto flex justify-between items-start'>
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a onClick={() => setComp(0)} className="block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Canvas</a>
                        </li>
                        <li>
                            <a onClick={() => setComp(1)} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
                        </li>
                    </ul>
                </div>
                <div className='w-screen max-h-screen h-full overflow-y-auto p-4 bg-gray-900'>
                    <CompSwitch />
                </div>
            </div>
        </div>
    )
}

export default Friend