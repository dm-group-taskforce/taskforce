import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    render() {
        return (
            <div>
                <section>
                    <h1>Username</h1>
                    <input/>
                </section>
                <section>
                    <h1>Password</h1>
                    <input/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
