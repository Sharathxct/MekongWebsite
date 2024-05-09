import React from 'react'

export default function Services() {
    const services = [
        {id : 1, title : 'CDMO & CMO', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image : 'src/assets/factory.png' },
        {id : 2, title : 'Research Development', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image : 'src/assets/research.png' },
        {id : 3, title : 'Drug Discovery', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image : 'src/assets/drugDisc.png' },
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service" >
        <div className='text-center my-8'>
            {/* <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2> */}
            {/* <p className='text-neutralGrey ' >We have been working with some Fortune 500+ clients</p> */}
            {/* Company Logo */}
            {/* <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src="/src/assets/icons/company1.png" alt="" />
                <img src="/src/assets/icons/company2.png" alt="" />
                <img src="/src/assets/icons/company3.png" alt="" />
                <img src="/src/assets/icons/company4.png" alt="" />
                <img src="/src/assets/icons/company5.png" alt="" />
                <img src="/src/assets/icons/company6.png" alt="" />
                <img src="/src/assets/icons/company7.png" alt="" />
            </div> */}

            {/* Services Card   */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Services</h2>
                <p className='text-neutralGrey' >These are are top-notch services.</p>
            </div>
            {/* cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full  '>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ' >
                                <img src={service.image} alt="" className='-ml-5' />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2' >{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.description}</p>
                        </div>

                    </div>)
                }
            </div>

        </div>
    </div>
  )
}
