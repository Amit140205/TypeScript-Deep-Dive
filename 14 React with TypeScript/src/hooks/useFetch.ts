import { useEffect, useState } from "react"

interface FetchData<T> {
    data: T | null
    loading: boolean
    error: string | null
}

export function useFetch<T>(url: string): FetchData<T>{
    const [state, setState] = useState<FetchData<T>>({
        data: null,
        loading: false,
        error: null
    })

    useEffect(()=>{
        setState({ data: null, loading: true, error: null })
        const getData = async ()=>{
            try {
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(`HTTP error ${res.status}`)
                }
                const r = await res.json()
    
                setState({
                    data: r as T,
                    loading: false,
                    error: null
                })
            } catch (error) {
                setState({
                    data: null,
                    loading: false,
                    error: `Something went wrong: ${error}`
                })
            }
        }

        getData()
    }, [url])

    return state
}