import React from 'react'
class FirstFriend extends React.Component{

render(){
    return(
     
       <div> 
           <h1>First React Program by {this.props.children} from {this.props.location} </h1>
       </div>
       
       

    )
}

}

export default FirstFriend;

