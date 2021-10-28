import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Header from './components/Layouts/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'

class App extends Component {
  // Adding states to manage behaviours 
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: [...data] }));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  //Remove the TodoItem 
  removeTodos = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(data => this.setState({
        todos: [
          ...this.state.todos.filter((todo) => {
            return todo.id !== id;
          })
        ]
      })).catch(error => console.log(error));
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter((todo) => {
    //       return todo.id !== id;
    //     })
    //   ]
    // })

  }
  addTodos = (title) => {

    // function RandomId() {
    //   let n = 100;
    //   let m = 0;
    //   let id = Math.floor(Math.random() * (n - m));
    //   return id = id + 40;
    // }

    // let newId = RandomId();
    // let NewTodo = {
    //   id: newId,
    //   title,
    //   completed: false,
    // }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((NewItem) => {
        return this.setState({
          todos: [
            ...this.state.todos, NewItem
          ]
        })
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodos={this.addTodos} />
              <Todos todos={this.state.todos} markComplete={this.markComplete}
                removeTodos={this.removeTodos} />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>

    );
  }

}
export default App;
