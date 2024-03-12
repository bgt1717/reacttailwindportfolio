import React from 'react';

const Contact = () => (
  <div className="bg-gradient-to-r from-indigo-300 ...">
    <div id='Contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20' >
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/6c663468-a746-4d6e-a3f9-524acbe62774"
              method='POST' 
              encType='multipart/form-data'
              >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-3' type="text" name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-3' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2' >
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-3' type="email" name="email" />
            </div>
            <div className='flex flex-col py-2' >
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-3' type="text" name="subject" />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-3' rows='10' name="message"></textarea>
            </div>
            <button className='border-2 border-black text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-red-400 font-medium text-sm px-5 py-4.5 text-center me-2 mb-2 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
    
  </div>
);

export default Contact;