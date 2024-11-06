import React from "react";

export default class ArrayState extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={value:["HTML","CSS","BS","JS","React JS","Redux","Java","SP"]}
    }
    render()
    {
        return(
            <>

            <table >
                <thead>
                <tr>
                   <th>Topics</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    {
                        this.state.value.map(items=><td key={items}>{items}</td>)
                    }
                </tr>
                </tbody>
            </table>
           
            {/* <ol>
                {this.state.value.map(items=><li key={items}>{items}</li>)}
            </ol> */}

            {/* <ul>
                {
                    this.state.value.map(items=><li key={items}>{items}</li>)
                }
            </ul> */}

            {/* <select>
                <option>Pls Select any value</option>
                {
                    this.state.value.map(items=><option key={items}>{items}</option>)
                }
            </select> */}
            </>
        )
    }
}