
import React from "react"

class Four extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return(
            <div style={{border:'3px solid black',padding:'5%'}}>
                <h4>Four Says {this.props.data}</h4>
            </div>
        )
    }
}

export default Four