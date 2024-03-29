import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/acedc059-8269-4a11-8f50-abad2a637727' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email</p>    
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name' required/>
            <input type="email" className='bg-[#ccd6f6] my-4 p-2' placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
