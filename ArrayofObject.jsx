import React from "react";

const ArrayofObject=()=>{
    const tasks=[
        {id:"1",text:"HTML",status:"Done"},
        {id:"2",text:"CSS",status:"Done"},
        {id:"3",text:"BS",status:"Done"},
        {id:"4",text:"JS",status:"Done"},
        {id:"5",text:"React JS & Redux",status:"Ongoing"}
    ]
    return(
        <>
        <ol>
        {
            tasks.map((task)=>{
                return(
                    <li key={task.id}>{task.id} - {task.text} - {task.status}</li>
                )
            })
        }
        </ol>
        </>
    )
}
export default ArrayofObject