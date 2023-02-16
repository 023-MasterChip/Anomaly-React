import React from 'react'

const ImageGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-6 gap-4">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} className="w-full h-48 object-cover" />
            ))}
        </div>
    )
}

export default ImageGrid