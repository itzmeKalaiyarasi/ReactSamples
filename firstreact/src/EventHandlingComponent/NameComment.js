import React from 'react'
class NameEvent extends React.Component {
    state = {  }
    render() { 
        return (<div> <h1>Name: {this.props.name} </h1>
        </div>  );
    }
}
 
export default NameEvent;