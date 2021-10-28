import React, { Component } from 'react'
import TodosItem from './TodosItem'
import PropTypes from 'prop-types';


class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo) => {
                return <TodosItem key={todo.id} todo={todo} markComplete={this.props.markComplete} removeTodos={this.props.removeTodos} />
            })
        )
    }
}


//Proptypes for  validating a property as required 
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    removeTodos: PropTypes.func.isRequired
}


export default Todos;
