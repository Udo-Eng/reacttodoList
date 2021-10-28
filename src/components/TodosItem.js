import React, { Component } from 'react'
import PropTypes from 'prop-types';

let checkBoxStyle = {
    marginLeft: '0.3em',
    marginRight: '0.4em',
}

let PStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'nowrap',
    justifyContent: 'left',
    alignItems: 'center',
}
let btnStyle = {
    marginLeft: 'auto',
    padding: '0.5em 0.8em',
    backgroundColor: '#0000ff',
    border: '1px #0000ff solid',
    borderRadius: '50%',
}

class TodosItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc solid',
            padding: '5px',
            background: '#f4f4f4',
        }
    }

    render() {
        const { id, title, } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p style={PStyle} >
                    <input type="checkbox" style={checkBoxStyle} onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.removeTodos.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


//Proptypes for  validate a property as required 
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    removeTodos: PropTypes.func.isRequired
}
export default TodosItem;
