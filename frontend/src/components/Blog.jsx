import React from 'react'
import blog1 from '../assets/Blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/Blog1.jpg'


export default function Blog() {
    const blogs =[
        {id: 1, title : 'Research & Development', image : blog1},
        {id: 2, title : 'Marketing', image : blog2},
        {id: 3, title : 'Business', image : blog3},
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 ' >Read our writings</h2>
            <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto ' >The Mekong blog is the best place to read about the latest insights, trends and more.​</p>
        </div>

        {/* Blog Cards */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center'>
            {
                blogs.map(blog=><div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.image} alt="" />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w=3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3>{blog.title}</h3>
                        <div className='flex items-center gap-8'>
                                        
                                    </div>
                    </div>
                </div>)
            }
        </div>

    </div>
  )
}
