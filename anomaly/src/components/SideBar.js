import React from 'react'

const SideBar = () => {
    return (
        <div className="flex flex-col">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Trending</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Latest</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Events</a>
                        </li>
                    </ul>
                </div>
    )
}

export default SideBar