import React from 'react'
import likeIcon from "../images/Like.png";
import commentIcon from "../images/Comment.png";
import shareIcon from "../images/Share.png";

const Post = ({ profileImageSrc, username, imageSrc, title }) => {
    return (
        <div class="justify-center rounded border my-4 w-full lg:w-6/12 md:w-6/12 bg-gray-700 mx-3 md:mx-0 lg:mx-auto">
            <div class="w-full flex justify-between p-3">
                <div class="flex items-center mx-2">
                    <div class="rounded-full h-12 w-12 bg-gray-800 flex items-center justify-center overflow-hidden">
                        <img src={profileImageSrc} alt="profilepic" />
                    </div>
                    <div className='flex flex-col-reverse mx-2'>
                        <span class="pt-1 ml-2 font-bold text-sm text-gray-300">{username}</span>
                        <span class="pt-1 ml-2 font-bold text-lg text-gray-100">{title}</span>
                    </div>

                </div>
                <span class="px-2 hover:bg-gray-00 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
            </div>
            <img class="w-full bg-cover" src={imageSrc} />
            <div class="px-3 pb-2">
                <div class="pt-2">
                    <i class="far fa-heart cursor-pointer"></i>
                    <span class="text-sm text-gray-400 font-medium">12 likes</span>
                </div>
                {/* <div class="pt-1">
                    <div class="mb-2 text-sm">
                        <span class="font-medium mr-2">braydoncoyer</span> Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!
                    </div>
                </div>
                <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
                <div class="mb-2">
                    <div class="mb-2 text-sm">
                        <span class="font-medium mr-2">razzle_dazzle</span> Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make sure you bring a good camera when you go!
                    </div>
                </div> */}
                <div className='flex flex-row justify-between p-2 mx-2'>
                    <img className='h-10 w-10' src={likeIcon} alt=''></img>
                    <img className='h-10 w-10' src={commentIcon} alt=''></img>
                    <img className='h-10 w-10' src={shareIcon} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Post