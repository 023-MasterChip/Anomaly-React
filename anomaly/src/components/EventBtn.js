import React, { useState } from 'react'
import './UploadBtn.css'
import AddEvent from './AddEvent';

const EventBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div
                onClick={() => setShowModal(true)}
                className='upload flex justify-center m-4'>
                <button >
                    ADD EVENT
                </button>
            </div>
            {showModal ? <AddEvent setShowModal={setShowModal} /> : null}
        </>
    )
}

export default EventBtn