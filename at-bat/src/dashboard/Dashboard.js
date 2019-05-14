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

        let updateStrikes = this.state.strikes + 1
        let resetStrikes = 0;

        if(this.state.strikes < 3){
            this.setState({strikes: updateStrikes})
        }else{
            this.setState({strikes: resetStrikes })
        }
    }
    updateBalls = (event) =>{
        event.preventDefault()

        let newBalls = this.state.balls +1;


        this.setState({balls: newBalls})
        
    }
    updateFouls = (event) =>{
        event.preventDefault()
    }
    updateHit = (event) =>{
        event.preventDefault()

        
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