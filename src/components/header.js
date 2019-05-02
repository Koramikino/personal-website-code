import React from 'react';
import colorScheme from './colorScheme';
import { Link } from 'gatsby';

const HeaderStyle = {
    padding: 0,
    width: '100%',
    backgroundColor: colorScheme.pastelPurple,
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
}

const HeaderLinkDiv = {
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: 'auto',
   marginBottom: 'auto'
}

const HeaderLink = {
    padding: '5px'
}
export default class Header extends React.Component {
    render() {
        return (
            <header style={HeaderStyle}>
                <h1>kora</h1>
                <div style={HeaderLinkDiv}>
                    <Link to="" id="header" style={HeaderLink}>home</Link>
                    <Link to="/about"  id="header" style={HeaderLink}>about</Link>
                    <Link to="/projects"  id="header" style={HeaderLink}>projects</Link>

                </div>
            </header>
        )
    }
}