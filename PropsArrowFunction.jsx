import React from "react";

const PropsArrowFunction =(props)=>{
    console.log(props)
    return(
        <>
        <h1>Welcome to {props.Course}</h1>
       

        <h2>Course Topics - {props.Topics}</h2>
        </>
    )
}
export default PropsArrowFunction