import { useEffect } from "react"

export const usegithub = () =>{
    const data = async () =>{
        const res = await fetch("https://github.com/injamamulhak0804")
        // const data = await res.json()
        console.log(res);
        
        
    }
    useEffect(()=>{data()},[])
}