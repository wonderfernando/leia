import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, options?: RequestInit) {
    const [data,setData] = useState<T>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<string | null>(null)

    useEffect( ()=>{
        (async ()=> {
            try {
                setLoading(true)
                const response = await fetch(url, options)
                if (!response.ok) throw new Error(`Error: ${response.status}`)
                const json = await (response.json()) as T
                setData(json)
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
            }finally{
                setLoading(true)
            }
        })()
    },[url])
    return {data, loading, error}

}