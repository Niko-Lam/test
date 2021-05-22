import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    allChange = (event) => {
        let { checked } = event.target;
        this.props.allCheck(checked)
    }

    delDone = () => {
        this.props.delCheck()
    }

    render() {
        let { todoList } = this.props
        let conut = todoList.length
        let doneCount = todoList.reduce((pre, todo) => { return pre + (todo.isFinish ? 1 : 0) }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === conut ? true : false} onChange={this.allChange} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{conut}
                </span>
                <button onClick={this.delDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
