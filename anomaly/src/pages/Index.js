import React from 'react'
import logo from '../logo.svg';
import bgImage from '../images/Anomaly-bg.jpg';

const Index = () => {
    return (
        <div className="bg-gray-900 h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-8">
                    <img src={logo} alt="Anomaly Logo" className="h-8 w-8" />
                    <div className="flex items-center">
                        <button className="bg-transparent text-white font-bold mx-4 py-2 px-4 rounded border border-white hover:bg-white hover:text-gray-900 transition duration-300">Login</button>
                        <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded border border-white hover:bg-transparent hover:text-white transition duration-300">Sign Up</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-white font-bold text-5xl mb-4">Join Anomaly</h1>
                    <p className="text-white text-center max-w-2xl mb-8">Connect with fellow artists and creators, discover new inspiration, and share your work with a community that supports and encourages creativity.</p>
                    <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded border border-white hover:bg-transparent hover:text-white transition duration-300">Get Started</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}></div>
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