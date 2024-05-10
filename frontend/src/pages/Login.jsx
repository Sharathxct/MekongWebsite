import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import Navbar from '../components/Navbar'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login , error , isLoading} = useLogin()

    async function handleSubmit(e){
        e.preventDefault()

        await login( username, password)
    }
  return (
    <>
    
    <Navbar />
    <div className='bg-neutralSilver h-screen flex items-center'>
        <form onSubmit={handleSubmit} className=' bg-white h-fit max-w-[400px] m-auto p-[20px] rounded-sm  flex flex-col justify-center items-center'>
            <div className='m-5 flex flex-col'>
                <label htmlFor="username"  >Username :</label>
                <input type="text" autoComplete='false' name='username' onChange={ e => setUsername(e.target.value)} value={username}  />
            </div>
            <div className='m-5 flex flex-col'>
                <label htmlFor="password">Password :</label>
                <input type="password" name='password' onChange={ e => setPassword(e.target.value)} value={password} />
            </div>
            <button className='btn-primary' type='submit' disabled={isLoading}>Login</button>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
        </form>
    </div>
    </>
  )
}
