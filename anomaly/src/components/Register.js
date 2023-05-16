import React, { useState } from 'react'
import Login from './Login';
import './LoginBtn.css'
import Signup from './Signup';

const Register = ({ setShowModal }) => {
    const [comp, setComp] = useState('login');

    const toggleComp = () => {
        setComp(comp === 'login' ? 'signup' : 'login');
    }

    const CompSwitch = () => {
        if (comp === 'login') {
            return <Login />;
        } else if (comp === 'signup') {
            return <Signup setShowModal={setShowModal}/>;
        }
        return null;
    }

    const linkText = comp === 'login' ? 'Register Now' : 'Login Here';
    const pText = comp === 'login' ? 'New User? ' : 'Already Have An Account? ';

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold font-Audiowide text-center w-full">
                                ANOMALY
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <CompSwitch />
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                            {/* <button
                                className="flex justify-center mx-auto font-Teko text-2xl log"
                                type="submit"
                                // onClick={() => setShowModal(false)}
                            >
                                {comp === 'login' ? 'Login' : 'Signup'}
                            </button> */}
                            <div className='font-Teko text-lg'>
                                {pText}<a href='#' onClick={toggleComp} className='text-blue-500'>{linkText}</a>
                            </div>

                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Register