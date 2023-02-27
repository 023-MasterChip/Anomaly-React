import React from 'react'
import Card from './Card'

const Friends = () => {
    return (
        <div className='mx-24'>
            <div className='grid grid-cols-4 gap-4'>
                <Card
                    imageSrc='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    user='someguy.user'
                    name='someguy'
                />
                <Card
                    imageSrc='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80'
                    user='anotherguy.user'
                    name='anotherguy'
                />
                <Card
                    imageSrc='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    user='thegirl.user'
                    name='the girl'
                />
            </div>

        </div>
    )
}

export default Friends