import React, {useState, useEffect} from "react";

const APIProgram=()=>{
    const [data, setData]=useState();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((Response)=>Response.json())
        .then((data)=>setData(data))
    },[])
return(
    <>
    {
        data && data.map((item)=>{
            return <p key={item.id}>{item.id} - {item.email}</p>
        })
    }
    </>
)  
}
export default APIProgram