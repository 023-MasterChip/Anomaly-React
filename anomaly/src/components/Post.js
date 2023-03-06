import React, { useState, useEffect } from 'react'
import likeIcon from "../images/Like.png";
import commentIcon from "../images/Comment.png";
import shareIcon from "../images/Share.png";
// import PostComment from './PostComment';

const Post = ({ posts }) => {

    const [showProfileModal, setShowProfileModal] = useState(false)

    return (
        <div>
            {/* <PostComment /> */}
            {posts && posts.map((posts, k) => (
                <div class="justify-center rounded border my-4 w-full lg:w-6/12 md:w-6/12 bg-gray-700 mx-3 md:mx-0 lg:mx-auto">
                    <div class="w-full flex justify-between p-3">
                        <div class="flex items-center mx-2">
                            <div class="rounded-full h-12 w-12 bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={posts.imagePath} alt="profilepic" />
                            </div>
                            <div className='flex flex-col-reverse mx-2'>
                                <span class="pt-1 ml-2 font-bold font-mono text-sm text-gray-300">{posts.username}</span>
                                <span class="pt-1 ml-2 font-bold font-Michroma text-lg text-gray-100">{posts.title}</span>
                            </div>
                        </div>
                        <span class="px-2 hover:bg-gray-00 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                    </div>
                    <img class="w-full bg-cover" src={posts.imagePath} />
                    <div class="px-3 pb-2">
                        <div class="pt-2">
                            <i class="far fa-heart cursor-pointer"></i>
                            <span class="text-sm text-gray-400 font-medium">{posts.likes} likes</span>
                        </div>
                        <div className='flex flex-row justify-between p-2 mx-2'>
                            <img className='h-10 w-10' src={likeIcon} alt=''></img>
                            <img className='h-10 w-10' src={commentIcon} alt=''></img>
                            <img className='h-10 w-10' src={shareIcon} alt=''></img>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post