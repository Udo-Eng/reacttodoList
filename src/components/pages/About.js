import React from 'react'

let pStyle = {
    border: '1px #ccc solid',
    padding: '5px',
    background: '#f4f4f4',
}

function About() {
    return (
        <React.Fragment>
            <h1 className='center'>App description </h1>
            <p style={pStyle}>This is a practise copy Application Built using Travesy React Crash Course on YouTube </p>
        </React.Fragment>
    )
}


export default About;