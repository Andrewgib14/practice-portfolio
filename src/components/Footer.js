import React, { Component } from 'react'

const styles = {
    footerStyle: {
        textAlign: 'left',
    },
    footerDiv: {
        border: '1px solid black'
    }
}

export default class Footer extends Component {
    render() {
        return (
            <div style={styles.footerDiv}>
                <p style={styles.footerStyle}>Copyright © 2017 Andrew Gibson</p>
            </div>
        )
    }
}
