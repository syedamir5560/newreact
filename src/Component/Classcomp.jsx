import React, { components } from 'react'

class Classcomp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "red"
        }
    }

    render() {
        return (
            <div>
                <h1>Class components {this.props.name}</h1>
            </div>
        )
    }
}
export default Classcomp
