import React, { Component } from 'react'

export default class References extends Component {
    render() {
        return (
            <div>
                <h1>References:</h1>
                <br />
                <div>
                    <div>
                        <h1>Mom</h1>
                        <p>phone: 888-999-0000</p>
                        <a href="mailto:andrewsmom@me.com">Email</a>
                        <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                    <div>
                        <h1>Dad</h1>
                        <p>phone: 888-999-1111</p>
                        <a href="mailto:andrewsdad@me.com">Email</a>
                        <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                    <div>
                        <h1>Sister</h1>
                        <p>phone: 888-999-2222</p>
                        <a href="mailto:andrewssis@me.com">Email</a>
                        <p>Recommendations: lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
        )
    }
}
