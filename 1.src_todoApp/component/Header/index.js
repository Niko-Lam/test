import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    getValue = (event) => {
        let { keyCode, target } = event
        if (keyCode !== 13) return
        let newItem = {
            id: Date.now(),
            text: target.value,
            isFinish: false
        }
        this.props.addItem(newItem)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.getValue} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
