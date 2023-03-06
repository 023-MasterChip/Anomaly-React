import React ,{useState,useEffect}from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import RecomCard from '../components/RecomCard'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'
import UploadBtn from '../components/UploadBtn'

const Social = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        getUserPosts();
        // console.log("path"+window.location.pathname)
      },[])

    const getUserPosts = async() => {
        // const userId = localStorage.getItem("userId");
        fetch("http://localhost:5000/user/posts")
          .then((response) => response.json())
          .then((data) => setPosts(data));
      };

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
                    <Post posts={posts} />
                   
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