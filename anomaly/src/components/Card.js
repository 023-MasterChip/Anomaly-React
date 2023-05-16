import React from 'react'
import './Card.css'

const Card = ({ imageSrc, user, name }) => {
    return (
        <a href={`/friend/${user}`}>
        <div class="card">
            <b></b>
            <img
                className='flex w-full h-full object-cover rounded-md hover:rounded-2xl'
                src={imageSrc} alt='user'
            />
            <div class="content">
                <p class="title">{user}<br /><span>{name}</span></p>
            </div>
        </div>
        </a>
    )
}

export default Card
