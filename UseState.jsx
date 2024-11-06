import React,{useState} from "react";

function UseStateExample()
{
    // const [name, setName]=useState("")
    const [count, setCount]=useState(0)
    return(
        <>
        <h1>Count Value - {count}</h1>
        <p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </p>


        {/* <h1>Welcome {name}</h1>

        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/> */}
        </>
    )
}
export default UseStateExample