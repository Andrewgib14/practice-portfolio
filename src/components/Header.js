import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    navStyle: { top: 0, display: "flex", width: "100%", justifyContent: "space-around", paddingTop: 20, marginBottom: 50 },
    listStyle: {},
    linkStyle: {
        textDecoration: "none",
        border: "2px solid red",
        color: "black",
        fontWeight: "bold",
        padding: 5,
    },
    activeStyle: {
        backgroundColor: "red",
        color: "white"
    }
}

export default class Header extends Component {


    render() {
        return (
            <div>
                <nav style={styles.navStyle}>
                    <NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} exact to="/">Home</NavLink>
                    <NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} to="/about">About</NavLink>
                    <NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} to="/portfolio">Portfolio</NavLink>
                    <NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} to="/contact">Contact</NavLink>
                    <NavLink activeStyle={styles.activeStyle} style={styles.linkStyle} to="/references">References</NavLink>
                </nav>
            </div>
        )
    }
}
