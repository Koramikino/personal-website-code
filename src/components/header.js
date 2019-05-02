import React from 'react';
import colorScheme from './colorScheme';
import { Link } from 'gatsby';

const HeaderStyle = {
    padding: 0,
    width: '100%',
    backgroundColor: colorScheme.pastelPurple,
    color: 'white',
    display: 'flex',
}

const HeaderMainTextStyle = {
    padding: '20px',
    margin: 0,
    flex: '0 0 65%'
}

const headerLinkDiv = {
   flex: '1',
   margin: 'auto 0',
   textAlign: 'center'
}

const headerLink = {
    padding: 5
}
export default class Header extends React.Component {
    render() {
        return (
            <header style={HeaderStyle}>
                <h1 style={HeaderMainTextStyle}>Kora</h1>
                <div style={headerLinkDiv}>
                    <Link to="" id="header" style={headerLink}>home</Link>
                    <Link to="/about"  id="header" style={headerLink}>about</Link>
                    <Link to="/projects"  id="header" style={headerLink}>projects</Link>

                </div>
            </header>
        )
    }
}