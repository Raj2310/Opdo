import React, { Component } from 'react'
import './App.css'
import TodoListContainer from './Components/TodoListContainer'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
