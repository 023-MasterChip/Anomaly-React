import React, { useEffect, useState } from 'react'
import Card from './Card'

const Friends = () => {
    const user = localStorage.getItem("username")
    const [friends, setFriends] = useState([])
    useEffect(() => {
        getFriends()
    }, [])
    const getFriends = async () => {
        // const userId = localStorage.getItem("userId");
        fetch("http://localhost:5000/user/friend/" + user)
            .then((response) => response.json())
            .then((data) => setFriends(data));
    };
    return (
        <div className='mx-24 w-screen'>
            <div className='grid grid-cols-4 gap-4'>
                {friends.map((friend, key) => (
                    <Card
                        imageSrc={friend.imagePath}
                        user={friend.username}
                        name={friend.name}
                    />)
                )

                }
            </div>

        </div>
    )
}

export default Friends