import React from 'react'

const Index = () => {
  return (
    <html>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <a href='#one' >
                        <img className='h-screen w-screen object-cover relative' src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt=""></img>
                    </a>
                    <h1 className='text-9xl font-bold text-center text-gray-200 absolute'>ANOMALY</h1>
                </div>
            </div>
            <div>
                <section id='one' className='h-screen border-3 border-black bg-white-600'>

                    <div className='flex flex-col justify-center w-1/2 mx-auto mb-4'>
                        <p className='font-medium text-lg text-center pt-4 mx-auto'>
                            With Anomaly, you can discover new and exciting art from a diverse community of creators.
                            If you're looking for inspiration, or just enjoy browsing through different styles and mediums,
                            Anomaly has something for everyone.</p>
                        <p className='font-medium text-lg text-center pt-4 mx-auto'>
                            Whether you're a beginner or a professional, you can easily create and share your artwork with others,
                            and get feedback and inspiration from other artists.
                        </p>
                        <p className='font-medium text-lg text-center pt-4 mx-auto'>
                            Give Anomaly a try today and be inspired by the creativity of others.
                        </p>
                    </div>
                </section>
            </div>
        </html>
  )
}

export default Index