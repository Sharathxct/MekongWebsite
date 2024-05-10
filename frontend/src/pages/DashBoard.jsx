import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuthContext } from '../hooks/useAuthContext'

export default function DashBoard() {
  const [name , setName] = useState('')
  const [casNo, setCasNo] = useState('')
  const [ isLoading, setIsLoading ] = useState(null)
  const [ error, setError ] = useState(null)
  const [msg , setMsg] = useState(null)
  const {user} = useAuthContext(); 


  async function handleSubmit(e){
    e.preventDefault()
    console.log(name, casNo)
    setIsLoading(true)
    const response = await fetch('https://mekong-website.vercel.app/api/user/add/product', {
      method : 'POST',
      headers :{
        'Content-type' : 'application/json',
        'x-access-token' : user.token
      },
      body : JSON.stringify({product : {name , casNo}})
    })
    const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setIsLoading(false)
            setMsg("Successfully added")
        }
  }

  
  return (
    <>
        <Navbar />
        <div className='bg-neutralSilver h-screen flex items-center'>
        <form onSubmit={handleSubmit} className=' bg-white h-fit max-w-[400px] m-auto p-[20px] rounded-sm  flex flex-col justify-center items-center'>
            <div className='m-5 flex flex-col'>
                <label htmlFor="name"  >Name :</label>
                <input type="text" autoComplete='false'  name='name' onChange={ e => setName(e.target.value)} value={name}  />
            </div>
            <div className='m-5 flex flex-col'>
                <label htmlFor="casNo">CAS No :</label>
                <input type="text" autoComplete='false' name='casNo' onChange={ e => setCasNo(e.target.value)} value={casNo} />
            </div>
            <button className='btn-primary' type='submit' >Add</button>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>} 
            {msg && <div>{msg}</div>}
        </form>
    </div>
        
    </>
  )
}
