import React, { useState,useEffect } from 'react'
import ImageGrid from '../components/ImageGrid'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const user = localStorage.getItem("username")
    const navigate = useNavigate();
    useEffect(() => {
        if(!user)
        {
            navigate("/index")
        }
      },[]);
    const [selectedLink, setSelectedLink] = useState('All');
    const images = [
        "https://images.unsplash.com/photo-1676153838100-c571de2bdf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1654940230870-444f28aff3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675457817910-337eb33b8508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675904626459-ae694b824ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1676153838100-c571de2bdf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1654940230870-444f28aff3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675457817910-337eb33b8508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675904626459-ae694b824ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1676153838100-c571de2bdf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1654940230870-444f28aff3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675457817910-337eb33b8508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1675904626459-ae694b824ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        // add more images here as needed
    ];
    return (
        <div className='fixed w-full'>
            <Navbar />
            <div className='flex flex-col w-full h-screen bg-gray-900'>
                <div className='bg-gray-900 overflow-y-auto w-full flex justify-between items-start'>
                    <ul className="flex flex-col p-4 mt-4 border font-Teko border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className={`block py-2 pl-3 pr-4 rounded text-xl ${selectedLink === 'All'
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
                                className={`block py-2 pl-3 pr-4 rounded text-xl ${selectedLink === '2D'
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
                                className={`block py-2 pl-3 pr-4 rounded text-xl ${selectedLink === '3D'
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
                                className={`block py-2 pl-3 pr-4 rounded text-xl ${selectedLink === 'Animation'
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
                                className={`block py-2 pl-3 pr-4 rounded text-xl ${selectedLink === 'Nodes'
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
                    <ImageGrid images={images} />
                </div>
            </div>

        </div>
    )
}

export default Home