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
    updateFouls = (event) =>{

    }
    updateHit = (event) =>{
        
    }
    render(){
        return(
            <div>
                <p>At Bat recorder</p>
                <Display strikes={this.state.strikes} balls={this.state.balls} />

                <button data-testid="strikeButton" onClick={this.updateStrikes}>Update strikes</button>
                <button data-testid="ballButton" onClick={this.updateBalls}>Update balls</button>
                <button data-testid="foulButton" onClick={this.updateFouls}>Update fouls</button>
                <button data-testid="hitButton" onClick={this.updateHit}> Update Hit</button>

            </div>
        )
    }
}

export default Dashboard;