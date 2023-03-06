import React from 'react'

const PostComment = () => {
    return (
        <>
            <div class="justify-center rounded border overflow-x-auto overflow-y-hidden my-4 w-full z-50 lg:w-6/12 md:w-6/12 bg-gray-700 mx-3 md:mx-0 lg:mx-auto">
                <div class="w-full flex justify-between p-3">
                    <div class="flex items-center mx-2">
                        <div class="rounded-full h-12 w-12 bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img src='' alt="profilepic" />
                        </div>
                        <div className='flex flex-col-reverse mx-2'>
                            <span class="pt-1 ml-2 font-bold font-mono text-sm text-gray-300">Username</span>
                            <span class="pt-1 ml-2 font-bold font-Michroma text-lg text-gray-100">Title</span>
                        </div>
                    </div>
                    <span class="px-2 hover:bg-gray-00 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                </div>
                <img class="w-full bg-cover" src='' />
                <div class="px-3 pb-2">
                </div>
            </div>
        </>
    )
}

export default PostComment