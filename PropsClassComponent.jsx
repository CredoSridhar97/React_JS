import React from "react";

class PropsClassComponent extends React.Component{
    render()
    {
        return(
            <>
            <h1>Welcome to {this.props.Course}</h1>
            </>
        )
    }
}
export default PropsClassComponent