import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = ()=>{
    const [error , setError] = useState(null)
    const [isLoading , setIsLoading] = useState(null)
    const {dispatch} = useAuthContext();

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://mekong-website.vercel.app/api/user/login', {
            method : 'POST',
            headers :{'Content-type' : 'application/json'},
            body : JSON.stringify({user : {username , password}})
        })

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify({ username , token : json.token}))
            dispatch({type : 'LOGIN', payload : {username, token : json.token} })
            setIsLoading(false)

        }

    }
    return {login, isLoading, error }
}