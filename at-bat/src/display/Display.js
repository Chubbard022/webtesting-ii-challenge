import React from "react"

class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>balls: {this.props.balls}</h3>
                <h3>strikes: {this.props.strikes}</h3>
            </div>
        )
    }
}
export default Display;