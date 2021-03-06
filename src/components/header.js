import React from 'react';
import colorScheme from './colorScheme';
import { Link } from 'gatsby';

const HeaderStyle = {
    padding: 0,
    width: '100%',
    backgroundColor: colorScheme.purple,
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
}

const ul = {
    listStyle: 'none',
    padding: 0,
    marginTop: 'auto',
    marginBottom: 'auto',
}

const li = {
    display: 'inline-block',
    padding: 5
}

export default class Header extends React.Component {
    render() {
        return (
            <header style={HeaderStyle}>
                <ul style={ul}>
                    <li style={li}><Link to="" id="header">home</Link></li>
                    <li style={li}><Link to="/projects" id="header">projects</Link></li>
                </ul>
            </header>
        )
    }
}