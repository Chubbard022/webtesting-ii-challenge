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
    render(){
        return(
            <div>
                hello from dashboard
                <Display strikes={this.state.strikes} balls={this.state.balls} />
            </div>
        )
    }
}

export default Dashboard;