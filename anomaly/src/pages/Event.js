import React, { useEffect, useState } from 'react'
import EventBtn from '../components/EventBtn'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'
import UploadBtn from '../components/UploadBtn'


const Event = () => {
    const [events, setEvents] = useState([])
    const [posts, setPosts] = useState([])
    const [eventFilter, setEventFilter] = useState('All')

    useEffect(() => {
        fetch("http://localhost:5000/user/getevents")
            .then((response) => response.json())
            .then((data) => setEvents(data));
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/user/filterevents/" + eventFilter)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, [eventFilter])
    return (
        <div className='flex flex-col fixed w-full bg-gray-900'>
            <Navbar />
            <div className='flex flex-row'>
                <div className='bg-gray-900 p-8 h-screen'>
                    <SideBar />
                    <EventBtn />
                </div>
                <div className='flex flex-col mx-auto max-h-screen overflow-y-auto'>
                    <Post posts={posts} />
                    <div className='my-10'></div>
                </div>
                <div className='bg-gray-900 p-8 h-screen'>
                    <div className='flex flex-col justify-center mb-20'>
                        {events && events.map((event, idx) => {
                            return (
                                <div onClick={() => setEventFilter(event.title)}>
                                    <EventCard title={event.title} username={event.username} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event