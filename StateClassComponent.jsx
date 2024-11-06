import React from "react";

class StateClassComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={Message:"Hi Welcome to Credo Systemz"}
    }

    ChangeMessage()
    {
        this.setState({Message:"Thanks to Visit Credo Systemz"})
    }

    render()
    {
        return(
            <>
            <h1>{this.state.Message}</h1>

            <button onClick={()=>this.ChangeMessage()}>LogOut Page</button>
            </>
        )
    }
}
export default StateClassComponent