import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    sendMsg = () => {
        axios.get('http://localhost:3000/students').then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.sendMsg}>Click me to send</button>
            </div>
        )
    }
}
