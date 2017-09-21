import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>GitHub: </p><Link to='https://github.com/Andrewgib14'>'https://github.com/Andrewgib14'</Link>
                <br />
                <p>Facebook: </p><Link to='#myFacebook'>Facebook</Link>
                <p>Telephone: </p>
                <p>1(270)123-4567</p>
            </div>
        )
    }
}
