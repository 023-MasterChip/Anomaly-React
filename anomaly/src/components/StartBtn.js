import React, { useState } from 'react'
import Register from '../components/Register';
import './StartBtn.css'

const StartBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)} class="btn font-Michroma">
                    Get Started
                </button>
            </div>

            {showModal ? <Register setShowModal={setShowModal} /> : null}
        </>
    )
}

export default StartBtn