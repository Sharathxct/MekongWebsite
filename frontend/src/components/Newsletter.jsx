import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-between lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug' >
                    Any enquiries regarding our products?
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary text-white flex items-center justify-between gap-2'>Get a quoute
                        <FaArrowRight className='text-white w-4 h-4  ' />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
