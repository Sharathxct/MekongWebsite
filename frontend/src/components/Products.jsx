import React from 'react'
import mobilelogin from '../assets/banner1.png'

export default function Products() {
  return (
    <div>
        {/* about  text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-12'>
                <div>
                    <img src={mobilelogin} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5' >How to connect with us?</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more.</p>
                         <button className='btn-primary'>Contact</button>
                </div>
            </div>
            {/* Company Stats*/}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src="" alt="" />
                    </div>

                    {/* stats */}
                    <div className='md:w-2/3 mx-auto '>
                        <div className=''>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-6' >Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2 '>S Maheshwar </h5>
                            <p className='text-base text-neutralGrey mb-8'>Founder & Director Mekong Pharmaceuticals</p>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
