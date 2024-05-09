import React from 'react'
import about1 from '../assets/about1.png'
import { FaUsers } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { IoEarthOutline } from "react-icons/io5";
import { SlChemistry } from "react-icons/sl";

export default function About() {
  return (
    <div id='About'>
        {/* about  text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-12'>
                <div>
                    <img src={about1} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5' >About Mekong Pharmaceuticals Pvt Ltd.</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Impedit enim laborum animi, quidem explicabo vero repudiandae
                         ratione dolorem ad nisi eligendi obcaecati minus sunt maiores 
                         sed reiciendis soluta nihil illum. Eligendi obcaecati minus sunt maiores 
                         sed reiciendis soluta nihil illum.</p>
                         <button className='btn-primary'>Learn More</button>
                </div>
            </div>
            {/* Company Stats*/}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5' >Research and Innovation
                        <span className='text-brandPrimary'> the right way.</span></h2>
                        <p>We reached here with our hard work.</p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                {/* <img src="/src/assets/icons/count1.png" alt="" /> */}
                                <SlChemistry className='text-brandPrimary w-8 h-8' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold' >170+</h4>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                {/* <img src="/src/assets/icons/count2.png" alt="" /> */}
                                <FaUsers className='text-brandPrimary w-8 h-8' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold' >50+</h4>
                                    <p>Team Members</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                {/* <img src="/src/assets/icons/count1.png" alt="" /> */}
                                <IoEarthOutline className='text-brandPrimary w-8 h-8' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold' >8+</h4>
                                    <p>Countries</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                {/* <img src="/src/assets/icons/count2.png" alt="" /> */}
                                <GiTrophy className='text-brandPrimary w-8 h-8' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold' >5+</h4>
                                    <p>Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
