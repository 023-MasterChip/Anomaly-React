import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import RecomCard from '../components/RecomCard'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'
import UploadBtn from '../components/UploadBtn'

const Social = () => {
    return (
        <div className='flex flex-col fixed w-full bg-gray-900'>
            <Navbar />
            <div className='flex flex-row'>
                <div className='bg-gray-900 p-8 h-screen'>
                    <SearchBar />
                    <SideBar />
                    <UploadBtn/>
                </div>
                <div className='flex flex-col mx-auto max-h-screen overflow-y-auto'>
                    <Post
                        profileImageSrc="https://avatars0.githubusercontent.com/u/38799309?v=4"
                        imageSrc="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
                        username="braydoncoyer"
                        title="Lord Of The Rings" />
                    <Post
                        profileImageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        imageSrc="https://images.unsplash.com/photo-1675822533501-b3011a164cec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        username="Milla"
                        title="Cafe" />
                    <Post
                        profileImageSrc="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        imageSrc="https://images.unsplash.com/photo-1676322721139-7e43cf46e2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        username="Leonardo"
                        title="Castellio" />
                    <Post
                        profileImageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        imageSrc="https://images.unsplash.com/photo-1675947768776-01e190cd45e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        username="John"
                        title="Its snowing" />
                    <div className='my-10'></div>
                </div>
                <div className='bg-gray-900 p-8 h-screen'>
                    {/* need to edit */}
                    <RecomCard
                        name='John Doe'
                        username='The.John'
                        imageSrc='https://randomuser.me/api/portraits/men/79.jpg'
                    />
                    <RecomCard
                        name='Jane Doe'
                        username='Doe_Jane'
                        imageSrc='https://randomuser.me/api/portraits/women/90.jpg'
                    />
                    <div className='flex justify-center'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social