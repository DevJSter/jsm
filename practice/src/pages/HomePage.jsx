import React from 'react'

const HomePage = () => {
    return (
        <div className='h-screen text-whiteColor flex items-center justify-center'>
            <div>
                <p className='text-center lg:text-[3.5rem] md:text-[3rem] text-2xl font-bold'>Docs <span className='font-extrabold text-lightGreen'>Summarizer.</span></p>
                <p className='flex items-center justify-center'>
                    <p className=' text-center lg:mt-16 md:mt-12 mt-5 text-sm md:text-xl lg:text-2xl lg:w-[65%] w-[75%] '>Byte-sized Docs Summaries. Save time, stay informed</p>
                </p>
                <div className='mx-12 md:mx-0'>
                    <input type="text" 
                    placeholder='https://www.react.dev/'
                    className='w-[100%] lg:mt-16 md:mt-12 mt-5 p-3 rounded-xl bg-transparent outline-lightGreen border border-mediumGreen placeholder-mediumGreen place-items-center' />
                    <button className='mt-3 w-full bg-slate-600 p-3 rounded-xl text-darkGreen font-bold'>Generate Summary</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage