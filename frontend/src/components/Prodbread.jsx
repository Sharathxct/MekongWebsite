import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaLessThanEqual } from 'react-icons/fa6';

export default function Prodbread() {
    let count = 0;
    const colomn = [
        {
            name : 'Sl No',
            width : "60px",
            selector : () => count++,
        },
        {
            name : 'Name',
            selector : (row) => row.name,
        },
        {
            name : 'CAS No',
            selector : (row) => row.casNo,
        }

    ]

    const [data , setData]  = useState([]);
    const [Search , setSearch] = useState('');
    const [filter , setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getData();
    }, [])

    useEffect(()=>{
        const result = data.filter((item)=>{
            return item.name.toLowerCase().match(Search.toLowerCase());
        })
        setFilter(result)
    }, [Search])

    const getData = async () => {
        try{
            const req = await fetch('https://mekong-website.vercel.app/api/user/products')
            const res = await req.json()
            setIsLoading(false)
            setData(res)
            setFilter(res)
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <>
            <div className='bg-brandPrimary text-white' >
                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto text-center min-h-1.5 ' >
                    <div className='w-full mx-auto'>
                        <div className='my-10 md:my-8 py-12'>
                            <h1 className='mt-10 font-bold text-2xl'>Products</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
                <div className='max-w-[90vw] mx-auto '>
                    {
                        isLoading ? (<h1>Loading...</h1>) : (<DataTable
                            columns={colomn}
                            data={filter}
                            pagination
                            fixedHeader
                            subHeader
                            subHeaderComponent = {
                                <input type='text' className='' 
                                placeholder='Search...' 
                                value={Search} 
                                onChange={(e)=>{
                                     setSearch(e.target.value) 
                                    }
                                }  />
                            }
                            />)
                    }
                    
                </div>
                
    
    </>
    
  )
}
