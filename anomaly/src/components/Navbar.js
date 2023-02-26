import React, { useState } from 'react'
import Settings from './Settings'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLink, setSelectedLink] = useState('Home');
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div className="container flex items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="website Logo" /> */}
                        <span className="self-center text-xl font-Audiowide font-semibold whitespace-nowrap dark:text-white">Anomaly</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <button onClick={() => setShowModal(true)} type="button" className="flex mr-3 text-sm mx-4 my-2 bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="user photo" />
                        </button>
                    </div>
                    <div className="items-end justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col p-4 mt-4  font-Michroma font-bold border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/home"
                                    className={`block py-2 pl-3 pr-4 rounded ${selectedLink === 'Home'
                                        ? 'text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => setSelectedLink('Home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/social"
                                    className={`block py-2 pl-3 pr-4 rounded ${selectedLink === 'Social'
                                        ? 'text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => setSelectedLink('Social')}
                                >
                                    Social
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/event"
                                    className={`block py-2 pl-3 pr-4 rounded ${selectedLink === 'Event'
                                        ? 'text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => setSelectedLink('Event')}
                                >
                                    Event
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/user"
                                    className={`block py-2 pl-3 pr-4 rounded ${selectedLink === 'Profile'
                                        ? 'text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => setSelectedLink('Profile')}
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 pl-3 pr-4 rounded ${selectedLink === 'Contact'
                                        ? 'text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => setSelectedLink('Contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showModal ? <Settings setShowModal={setShowModal} /> : null}
        </>
    )
}

export default Navbar