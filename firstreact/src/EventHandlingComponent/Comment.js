import React from 'react'
class CommentEvent extends React.Component {
    
    render() { 
        return ( <div> <h1> 
            {this.props.children}
            </h1>
            </div>);
    }
}
 
export default CommentEvent;

