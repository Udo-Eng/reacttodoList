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
      .then((data) => this.setState({ todos: [...data] }))
      .catch(error => {
        console.log(error);

        return this.setState({
          todos: [
            {
              id: 1,
              title: 'Build a React Application ',
              complete: false
            },
            {
              id: 2,
              title: 'Read My Grail Message ',
              complete: false
            },
            {
              id: 3,
              title: 'Watch Rayner Teo Videos on Trading',
              complete: false
            },
            {
              id: 4,
              title: 'Watch TraversyMedia Videos on MongoDB and MySql and Sql',
              complete: false
            }
          ]
        })
      });
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
      })).catch(error => {
        console.log(error)
        return this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            })
          ]
        })

      }

      );
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter((todo) => {
    //       return todo.id !== id;
    //     })
    //   ]
    // })

  }
  addTodos = (title) => {

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
      })
      .catch(error => {
        function RandomId() {
          let n = 100;
          let m = 0;
          let id = Math.floor(Math.random() * (n - m));
          return id = id + 40;
        }

        let newId = RandomId();
        let NewTodo = {
          id: newId,
          title,
          completed: false,
        }
        console.log(error);
        return this.setState({
          todos: [
            ...this.state.todos, NewTodo
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
