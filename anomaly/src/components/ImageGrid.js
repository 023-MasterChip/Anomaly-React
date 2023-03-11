import React, { useState } from 'react'
import ImageView from './ImageView';

const ImageGrid = ({ posts }) => {
    const [showModal, setShowModal] = useState(false);
    const [newPost, setNewPost] = useState("")

    const handleClick = (e) => {
        var imagePost = {
            image: e.target.getAttribute("data-image"),
            title: e.target.getAttribute("data-title"),
            user: e.target.getAttribute("data-user"),
            userImage: e.target.getAttribute("data-userImage"),
        };
       
        setNewPost(imagePost);
        setShowModal(true);
    };

    return (
        <div className="grid grid-cols-5 gap-4 mb-20">
            {posts.map((post, index) => (
                <img
                    key={index}
                    data-title={post.title}
                    data-image={post.imagePath}
                    data-user={post.username}
                    data-userImage={post.userImage}
                    src={post.imagePath}
                    onClick={(e) => handleClick(e)}
                    alt={`Image ${index}`}
                    className="w-full h-80 object-cover" />
            ))}
            {showModal ? <ImageView posts={newPost} setShowModal={setShowModal} /> : null}
        </div>
    )
}

export default ImageGrid