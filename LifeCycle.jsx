import React from "react";

export default class LifeCycle extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state={msg:"Hi Welcome"}
        this.state={color:"Red"}
    }
    shouldComponentUpdate()
    {
        return true
    }
    changeColor=()=>{
        this.setState({color:"Pink"})
    }
   
    // componentWillMount()
    // {
    //     this.state={msg:"Welcome to Visit"}
    // }
    // componentDidMount()
    // {
    //     setTimeout(() => {
    //         this.setState({color:"Pink"})
    //     }, 5000);
    // }
    render()
    {
        return(
            <>
            <h1>{this.state.color}</h1>
            <button type="button" onClick={this.changeColor}>Check</button>
            {/* <h1>{this.state.msg} </h1> */}
            </>
        )
    }
}