import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'

const Social = () => {
  return (
    <div className='fixed w-full'>
        <Navbar/>
        <div className='flex flex-row'>
            <div className='bg-gray-900 p-8 h-screen'>
                <SearchBar/>
                <SideBar/>
            </div>
            <div>
                {/* cards */}
            </div>
            <div>
                {/* news */}
            </div>
        </div>
    </div>
  )
}

export default Social