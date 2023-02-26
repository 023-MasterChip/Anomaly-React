import React, { useState } from 'react'
import StartBtn from '../components/StartBtn';

const Index = () => {
    // const [show, setShow] = useState(false);
    return (
        <div className="bg-gray-900 h-screen w-auto">
            {/* <div className=''>
            <div className='flex justify-center bg-gray-700 mx-60'>
                <span className='text-white text-6xl font-extrabold'>ANOMALY</span>
            </div>
           </div> */}
            <div className="bg-gray-900 pb-12 overflow-y-hidden" style={{ minHeight: 700 }}>
                {/* Code block starts */}
                <dh-component>
                    <div className="bg-gray-200">
                        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                                <h1 className='flex justify-center font-Audiowide font-extrabold text-6xl my-4'>
                                    ANOMALY
                                </h1>
                                <h1 className="text-2xl font-Michroma sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl text-center text-gray-900 font-black leading-7 md:leading-10">
                                    With Anomaly, you can
                                    <span className='text-blue-600'> discover </span>
                                    new and exciting art from a diverse
                                    <span className='text-blue-600'> community </span>
                                    of creators.<br />
                                    If you're looking for
                                    <span className='text-blue-600'> inspiration</span>
                                    , or just enjoy browsing through different styles and mediums,
                                    <br />Anomaly has something for everyone.
                                </h1>
                                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-700 font-normal text-center text-sm sm:text-lg">
                                    Whether you're a beginner or a professional, you can easily create and share your artwork with others,
                                    and get feedback and inspiration from other artists.
                                    Give Anomaly a try today and be inspired by the creativity of others. </p>
                            </div>
                            <div className="flex font-Teko justify-center items-center">
                                {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                                <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button> */}
                                <StartBtn />
                            </div>
                        </div>
                    </div>
                </dh-component>
                {/* Code block ends */}
            </div>
        </div>
    )
}

export default Index

    // < p className = 'font-medium text-lg text-center pt-4 mx-auto' >
    //     With Anomaly, you can discover new and exciting art from a diverse community of creators.
    //                     If you're looking for inspiration, or just enjoy browsing through different styles and mediums,
    //                     Anomaly has something for everyone.</p >
    //                 <p className='font-medium text-lg text-center pt-4 mx-auto'>
    //                     Whether you're a beginner or a professional, you can easily create and share your artwork with others,
    //                     and get feedback and inspiration from other artists.
    //                 </p>
    //                 <p className='font-medium text-lg text-center pt-4 mx-auto'>
    //                     Give Anomaly a try today and be inspired by the creativity of others.
    //                 </p>