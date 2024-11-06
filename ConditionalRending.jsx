import React from "react";

class ConditionalRending extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state={Mark:87}
        // this.state={Number:9}    
        // this.state=  {age:26} 
        this.state={year:2024}
    }
    render()
    {
        return this.state.year%4==0 && <h1>{this.state.year} - Leap Year</h1>
        //    return( this.state.age>=18?<h1>{this.state.age} - VE</h1>:<h2>{this.state.age} - NVE</h2>)

        // let result;
        // if(this.state.Mark>=35){result=<h1>{this.state.Mark} - Pass</h1>}
        // else{result=<h1>{this.state.Mark} - Fail</h1>}
        // return <h1>{result}</h1>

        // if(this.state.Number%2==0){ return <h1>{this.state.Number} - Even Number</h1>}
        // else{ return <h1>{this.state.Number} - Odd Number</h1>}
    }
}
export default ConditionalRending