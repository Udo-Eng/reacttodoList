import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {

    //Create a State Object for this component
    state = {
        title: '',
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        let inputStyle = {
            padding: '0.5em 0.8em',
            border: '1px #fff solid',
            borderRadius: '2px',
            flex: '1 1 auto',
            outline: 'none',
        }
        return (
            <form className="container" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Add new Item"
                    style={inputStyle}
                    value={this.state.title}
                    //Implementing Event handler for the value attribute
                    onChange={this.onChange}

                >
                </input>
                <button className="btn" type="submit">
                    Add Item
                </button>
            </form>
        )
    }
}

//Proptypes for  validating a property as required 
AddTodo.propTypes = {
    addTodos: PropTypes.func.isRequired
}


export default AddTodo;