import React from 'react'

const UserComment = ({comment}) => {
    return (
        <div className='m-2 pl-2 pt-2'>
            <div className='border-b-2 border-black h-1 justify-center pb-1' />
            <span className='text-gray-300 font-mono text-md'>{comment.username}</span>
            <p className='text-white pt-2 pl-4'>{comment.comment}</p>
            <div className='border-b-2 border-black h-1 justify-center pt-2' />
        </div>
    )
}

export default UserComment