import React, {Component} from "react"

class TodoList extends Component {
  constructor(){
    super()
    this.state={
      todos: [],
      currentToDo: "",
    }
  }
  handleChange=event=>{
    console.log(event.target.value)
  }
  addItem = event =>{
    event.preventDefault();
    console.log("addItem Method fired")
  }
  render(){
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name</label>
          <input onChange={this.handleChange} name="taskname"type="text"placeholder="Add todo here"/>
          <button type="submit">Add task</button>
        </form>
      </div>
    )
  }
}
export default TodoList