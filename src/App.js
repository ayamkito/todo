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
    console.log("addItem Method fired");
    this.setState({
      todos:(this._inputElement.value)
    })
  }
  render(){
    return (
      <div className="container">
        <div>

        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name</label>
          <input onChange={this.handleChange} name="taskname"type="text"placeholder="Add todo here" ref={(item)=>this._inputElement=item} />
          <button type="submit">Submit</button>
        </form>
        </div>
          {this.state.todos}
      </div>
    )
  }
}
export default TodoList