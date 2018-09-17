import React from 'react'
import ReactDOM from 'react-dom'

class  LifeCycleComponent extends React.Component {
    constructor(){

        super()
        this.state={
            status:0
        }
        this.updateState=this.updateState.bind(this)
    }
    //Triggeres before the component mounted
  componentWillMount(){
    console.log("Component will be displayed in view")
   // alert("Component is not yet displayed in view")
  }
   //Triggeres once  the component mounted
  componentDidMount () {
    console.log("Component will be displayed in view")
  }
  //Triggeres before the component is updated
  componentWillUpdate(){
    console.log("Component will update its state now")
  }
  //Triggeres once the component is updated
  componentDidUpdate(){
    console.log("component State is updated")
  }
  componentWillUnmount () {
    console.log("Removing the LifeCycleComponent from the view")
  }
  
  updateState(){
     this.setState({status:this.state.status+1})
     if(this.state.status >=10){
        ReactDOM.unmountComponentAtNode(document.getElementById("lifeCycle"))
    }

  }
  unMountMe(){
      ReactDOM.unmountComponentAtNode(document.getElementById("lifeCycle"))
  }
    render() { 
        return ( 
            <div>
                <h1>
                It will do nothing.
                Take a look at console to understand component life cycle
                </h1>
                <button onClick={this.updateState}>ChangeState{this.state.status}</button>
                <button onClick={this.unMountMe}>UnMount</button>
            </div>
         );
    }
}
 
export default LifeCycleComponent;