import React from "react"

class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>balls:{this.props.balls}</p>
                <p>strikes:{this.props.strikes}</p>
            </div>
        )
    }
}
export default Display;