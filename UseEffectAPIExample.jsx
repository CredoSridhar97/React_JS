import React,{useState, useEffect} from "react";

const UseEffectAPIExample=()=>{
    const [data, setData]=useState()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    })
    return(
        <>
        {
            data && data.map((item)=>{
                return <h1 key={item.id}>{item.id} - {item.body}</h1>
            })
        }
        </>
    )
}
export default UseEffectAPIExample