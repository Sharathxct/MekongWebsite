import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'


export default function Hero() {
  return (
    <div className='bg-neutralSilver' id="home">
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen' >
            <Carousel className='w-full mx-auto' >
                <div className=" my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Research and <span className='text-brandPrimary leading-snug' >Development</span></h1>
                        <p className='text-neutralGrey text-base mb-8' >Our R&D Center is equipped with cutting-edge machinery and complies with international quality requirements.</p>
                        <button className='btn-primary' >Search</button>
                    </div>
                </div>

                <div className=" my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Contract Research and <span className='text-brandPrimary leading-snug' >Manufacturing</span></h1>
                        <p className='text-neutralGrey text-base mb-8' >Our top class manufacturing capabilities ensures highest quality of products.</p>
                        <button className='btn-primary' >Search</button>
                    </div>
                </div>

                <div className=" my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={banner3}  className='max-w-[400px]' alt="" />
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Quality <span className='text-brandPrimary leading-snug' >Assurance</span></h1>
                        <p className='text-neutralGrey text-base mb-8' >We have experienced and well established quality assurance department.</p>
                        <button className='btn-primary'>Search</button>
                    </div>
                </div>
                
            </Carousel>
        </div>
    </div>
  )
}
