import React from 'react'
import Card from './Card'

const Friends = () => {
    return (
        <div className='mx-24 w-screen'>
            <div className='grid grid-cols-4 gap-4'>
                <Card
                    imageSrc='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    user='someguy.user'
                    name='someguy'
                />
            </div>

        </div>
    )
}

export default Friends