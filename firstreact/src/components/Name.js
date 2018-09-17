import React from 'react'
import "./index.css"
class  Name  extends React.Component {
   
    render() { 
        let nameColor={
            color:this.props.fcolor,
            backgroundColor: "pink",
            float:"left",
            padding:"5px",
            margin:"2px",
            border:"2px solid red",
            borderRadius:"7px"

        }
        return ( 
            <div style={nameColor}>
            {this.props.children} 
             </div> );
    }
}
 
export default Name