import React from "react";

function PropsFunctionComponent(props){
    console.log(props)
    return(
        <>
        <h1>Trainer Name  - {props.Name}</h1>
        </>
    )

}
export default PropsFunctionComponent