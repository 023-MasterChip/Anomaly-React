import React, { useState } from 'react'
import FileUpload from './FileUpload';
import './UploadBtn.css'

const UploadBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)} className='upload flex justify-center m-4'>
                <button >
                    UPLOAD
                </button>
            </div>
            {showModal ? <FileUpload setShowModal={setShowModal} /> : null}
        </>
    )
}

export default UploadBtn