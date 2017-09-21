import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </nav>
            </div>
        )
    }
}
