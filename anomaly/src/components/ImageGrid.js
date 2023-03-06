import React from 'react'

const ImageGrid = ({ posts }) => {
    return (
        <div className="grid grid-cols-6 gap-4 mb-20">
            {posts.map((post, index) => (
                <img key={index} src={post.imagePath} alt={`Image ${index}`} className="w-full h-48 object-cover" />
            ))}
        </div>
    )
}

export default ImageGrid