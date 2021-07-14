import React from 'react';
import '../index.css';

// This is the component that allows a user to input a todo item and add to the list upon clicking its "Add Todo" button;

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ""};
  }

  updateInput = input => {
    this.setState({ input })
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
  };

  render() {
    return (
      <div>
        <input
          onChange={ e => this.updateInput(e.target.value)} // controlled input that set state upon OnChange.
          value={this.state.input}
         />
         <button className="add-todo" onClick={this.handleAddTodo}> {/** when the user click this button, it dispatches the ACTION (react-redux), to add the todo to the store */}
            Add Todo
         </button>
      </div>
    )
  }
}

export default AddTodo;