import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        flag: false
    }

    mouseHandle = (event) => {
        return () => {
            this.setState({
                flag: event
            })
        }

    }

    changeChecked = (id) => {
        return (event) => {
            this.props.changeState(id, event.target.checked)
        }
    }

    deleItem = (id) => {
        if (window.confirm('是否要刪除該事項')) {
            this.props.deleList(id)
        }
    }

    render() {
        const { text, isFinish, id } = this.props
        return (
            <li style={{ backgroundColor: this.state.flag ? '#999' : '#fff' }} onMouseEnter={this.mouseHandle(true)} onMouseLeave={this.mouseHandle(false)}>
                <label>
                    <input type="checkbox" checked={isFinish} onChange={this.changeChecked(id)} />
                    <span>{text}</span>
                </label>
                <button onClick={() => { this.deleItem(id) }} className="btn btn-danger" style={{ display: this.state.flag ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
