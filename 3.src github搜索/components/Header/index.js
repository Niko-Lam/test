import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
    search = () => {
        this.props.allState({ isFirst: false, isLoading: true })
        let { value } = this.keyWord
        axios.get(`https://api.github.com/search/users?q=${value}`)
            .then(res => {
                if (res.data.items.length === 0) {
                    this.props.allState({ isErr: true })
                }
                this.props.allState({ resList: res.data.items, isLoading: false })
            })
            .catch(err => {
                alert(err)
                this.props.allState({ isErr: true })
            })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(c) => { this.keyWord = c }} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
