import React from 'react'
import './RecomCard.css'
const RecomCard = ({name,username,imageSrc}) => {
    return (
        <div className="RecCard my-4">
            <div className="card-top-part">
                <div className="left-part ml-5">
                    <div className="user-name">
                        <p className="name font-mono text-gray-300">{name}</p>
                    </div>
                    <div className="user-position">
                        <p className="position font-mono text-gray-500">
                            {username}
                        </p>
                    </div>
                </div>
                <div className="right-part">
                    <div className="user-photo">
                        <img src={imageSrc} className="photo" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <button
                    className="flex text-teal-500 hover:text-teal-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Follow
                </button>
            </div>
        </div>
    )
}

export default RecomCard
