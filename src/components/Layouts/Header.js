//Creating a functional component without state management
import React from 'react';
import { Link } from 'react-router-dom';

//functional component 
function Header() {
    let header = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: '#fff',
        height: '20vh',
    }
    let linkStyle = {
        color: '#fff',
    }
    return (
        <header style={header}>
            <h1>TodoList</h1>
            <div>
                <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
            </div>
        </header>
    )
}


export default Header;