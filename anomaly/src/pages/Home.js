import React, { useState,useEffect } from 'react'
import ImageGrid from '../components/ImageGrid'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const user = localStorage.getItem("username")
    const [posts,setPosts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        if(!user)
        {
            navigate("/")
        }
      },[]);
      useEffect(()=>{
        getUserPosts();
        // console.log("path"+window.location.pathname)
      },[])
    const [selectedLink, setSelectedLink] = useState('All');
   
    const getUserPosts = async() => {
        // const userId = localStorage.getItem("userId");
        fetch("http://localhost:5000/user/posts")
          .then((response) => response.json())
          .then((data) => setPosts(data));
      };
    return (
        <div className='fixed w-full'>
            <Navbar />
            <div className='flex flex-col w-full h-screen bg-gray-900'>
                <div className='bg-gray-900 w-full flex justify-between items-start p-5'>
                    <ul className="flex flex-col border font-Teko border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'All'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => setSelectedLink('All')}
                            >
                                All
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === '2D'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => setSelectedLink('2D')}
                            >
                                2D
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === '3D'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => setSelectedLink('3D')}
                            >
                                3D
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Animation'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => setSelectedLink('Animation')}
                            >
                                Animation
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Nodes'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => setSelectedLink('Nodes')}
                            >
                                Nodes
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='w-screen max-h-screen overflow-y-auto p-4 bg-gray-900'>
                    <ImageGrid posts={posts} />
                </div>
            </div>

        </div>
    )
}

export default Home