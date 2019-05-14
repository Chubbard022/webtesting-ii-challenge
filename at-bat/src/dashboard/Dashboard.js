import React from 'react';
import Display from "../display/Display"

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            strikes: 0,
            balls: 0
        }
    }
    updateStrikes = (event) =>{
        event.preventDefault()
        let newStrikes = this.state.strikes +1
        this.setState({strikes: newStrikes})
    }
    updateBalls = (event) =>{
        event.preventDefault()

        let newBalls = this.state.balls +1;

        this.setState({balls: newBalls})
        
    }
    render(){
        return(
            <div>
                <p>At Bat recorder</p>
                <Display strikes={this.state.strikes} balls={this.state.balls} />
                <button onClick={this.updateStrikes}>Update strikes</button>
                <button onClick={this.updateBalls}>Update balls</button>

            </div>
        )
    }
}

export default Dashboard;