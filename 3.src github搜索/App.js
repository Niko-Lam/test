import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import './App.css'
export default class App extends Component {
    state = {
        resList: [],
        isFirst: true,
        isLoading: false,
        isErr: false
    }


    updateState = (resList) => {
        this.setState(resList)
    }

    render() {
        return (
            <div className="container">
                <Header allState={this.updateState} />
                <List {...this.state} />
            </div>
        )
    }
}
