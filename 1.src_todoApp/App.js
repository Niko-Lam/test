import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todoList: [{
      id: 1,
      text: 'sleep',
      isFinish: true
    }, {
      id: 2,
      text: 'eat',
      isFinish: true
    }, {
      id: 3,
      text: 'coding',
      isFinish: false
    }]
  }

  addItem = (event) => {
    let { todoList } = this.state
    todoList.unshift(event)
    // let newList = todoList
    this.setState({
      todoList: todoList
    })
  }

  changeState = (id, checked) => {
    let { todoList } = this.state
    let newList = todoList.map((el) => {
      if (el.id === id) {
        return { ...el, isFinish: checked }
      } else {
        return el
      }
    })
    this.setState({
      todoList: newList
    })
  }

  deleList = (id) => {
    let { todoList } = this.state
    let newList = todoList.filter((el) => {
      return el.id !== id
    })
    this.setState({
      todoList: newList
    })
  }


  allCheck = (checked) => {
    let { todoList } = this.state
    let newList = todoList.map((el) => {
      return { ...el, isFinish: checked }
    })
    this.setState({
      todoList: newList
    })
  }

  delCheck = () => {
    let { todoList } = this.state
    let newList = todoList.filter((el) => {
      return !el.isFinish
    })
    this.setState({
      todoList: newList
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addItem} todoList={this.state.todoList} />
          <List todoList={this.state.todoList} changeState={this.changeState} deleList={this.deleList} />
          <Footer todoList={this.state.todoList} allCheck={this.allCheck} delCheck={this.delCheck} />
        </div>
      </div>
    )
  }
}

