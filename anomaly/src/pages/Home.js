import React, { useState,useEffect } from 'react'
import ImageGrid from '../components/ImageGrid'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const user = localStorage.getItem("username")
    const [posts,setPosts] = useState([])
    const [selectedLink, setSelectedLink] = useState('All');
    const [category, setCategory] = useState('All')
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
      },[category])
   
   
    const getUserPosts = async() => {
        // const userId = localStorage.getItem("userId");
        console.log(category)
        fetch("http://localhost:5000/user/homeposts/"+category)
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
                                onClick={() => {
                                    setCategory('All')
                                    // getUserPosts()
                                    setSelectedLink('All')}}
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
                                onClick={() => {
                                    setCategory('2D')
                                    // getUserPosts()
                                    setSelectedLink('2D')}}
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
                                onClick={() => {
                                    setCategory('3D')
                                    // getUserPosts()
                                    setSelectedLink('3D')}}
                            >
                                3D
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Concept Art'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => {
                                    setCategory('Concept Art')
                                    // getUserPosts()
                                    setSelectedLink('Concept Art')}}
                            >
                                Concept Art
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Game Art'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => {
                                    setCategory('Game Art')
                                    // getUserPosts()
                                    setSelectedLink('Game Art')}}
                            >
                                Game Art
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Environment'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => {
                                    setCategory('Environment')
                                    // getUserPosts()
                                    setSelectedLink('Environment')}}
                            >
                                Environment
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-1 px-4 rounded text-xl ${selectedLink === 'Event'
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                onClick={() => {
                                    setCategory('Event')
                                    // getUserPosts()
                                    setSelectedLink('Event')}}
                            >
                                Event
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