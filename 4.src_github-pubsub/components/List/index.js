import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        resList: [],
        isFirst: true,
        isLoading: false,
        isErr: false
    }

    componentDidMount() {
        PubSub.subscribe('changeState', (_, data) => {
            this.setState(data)
        });
    }

    render() {
        let { resList, isFirst, isLoading, isErr } = this.state
        return (
            <div className="row">
                {   isFirst ? <h2>Welcome to my GitHub Users search</h2> :
                    isLoading ? <h2>Now is loading.......</h2> :
                        isErr ? <h2 style={{ color: 'red' }}>We went some problem around here</h2> :
                            resList.map((res) => {
                                return (
                                    <div className="card" key={res.id}>
                                        <a href={res.html_url} target="_blank" rel="noreferrer">
                                            <img src={res.avatar_url} alt='avatar' style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">{res.login}</p>
                                    </div>
                                )
                            })
                }
            </div>
        )
    }
}
