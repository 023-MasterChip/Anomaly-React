import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import UserComment from '../components/UserComment'

const Comment = () => {
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const user = localStorage.getItem("username");
    const [comments,setComments] = useState([])
    const [selectedPost, setSelectedPost] = useState()
    useEffect(()=>{
        fetch("http://localhost:5000/user/comment/" + id)
        .then((response) => response.json())
        .then((data) => {
            setSelectedPost(data)
            getComments()
        });

    },[])

    const getComments = () =>{
        fetch("http://localhost:5000/user/getcomments/" + id)
        .then((response) => response.json())
        .then((data) => setComments(data));
    }

    const saveForm = async (data) => {

        // console.log(data)
        const url = 'http://localhost:5000/user/addcomment/'+id+"/"+user;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            alert("couldn't add comment")
            return;
        } else {
            // const data = await response.json();
        //    console.log("comment added")
        getComments()
        }
    }

    return (
        <div className='bg-gray-900 fixed'>
            <div className='grid grid-cols-3 gap-4 mb-20 h-screen'>
                <div className='bg-gray-800 max-h-screen overflow-y-auto'>
                    {/* left */}
                    {comments && comments.map((comm,i)=>(<UserComment comment={comm}/>))}
                    
                </div>
                <div className='bg-gray-700 rounded-md my-4 justify-center px-5'>
                    {/* middle post */}
                    <div className='flex flex-col mx-5 py-2'>
                        <span class="py-2 ml-2 font-bold font-mono text-sm text-gray-300">{selectedPost && selectedPost.username}</span>
                        <span class="py-2 ml-2 font-bold font-Michroma text-xl text-gray-100">{selectedPost && selectedPost.title}</span>
                    </div>
                    <div className='w-full max-h-screen pb-5'>
                        <img
                            className='w-full h-auto bg-cover'
                            src={selectedPost && selectedPost.imagePath}
                            alt='Image' />
                    </div>
                </div>
                <div className='bg-gray-700'>
                    {/* right top */}
                    <div>
                        <form onSubmit={handleSubmit(saveForm)} className=''>
                            <label className='justify-center text-2xl font-bold my-5'>Comment</label>
                            <div className='flex justify-center'>
                                <textarea  {...register("comment", { required: true })} className='bg-gray-500 text-gray-200 p-5 rounded-sm w-4/5 h-36' placeholder='Write down your best reaction to the image'></textarea>
                            </div>
                            <div className='flex justify-center m-4'>
                                <button
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Add Comment
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* right bottom */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment

// src={require('../images/Default.jpg')}