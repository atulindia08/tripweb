import React from 'react'

function ChatBot() {
    return (
        <div className='h-80 w-64 border-2 brder-solid border-indigo-500 fixed bottom-0 right-5'>
            <div className='absolute top-0 w-64 bg-indigo-300'>
                Ask Disha
            </div>
            <div className='absolute bottom-0 w-64 border-2 border-indigo-800'>
                <input type="text" placeholder='Hi' className='border-2 w-100 active:border-0 text-black' />
            </div>
        </div>
    )
}

export default ChatBot