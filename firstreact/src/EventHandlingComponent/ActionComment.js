import React from 'react'
class ActionCompo extends React.Component {
    constructor()
    {
        super()
        this.state={
            like:0,
            unlike:0
        }
        this.likeMe = this.likeMe.bind(this)
        this.unLikeMe=this.unLikeMe.bind(this)
    }
    likeMe=function(){
        console.log("Like")
        this.setState({
            like:this.state.like+1
        })
    }

    unLikeMe(){
        console.log("Unlike")
        this.setState({

            unlike:this.state.unlike+1
        })
    }
    render() { 
        return ( 

            <div>
                <button onClick={this.likeMe}>Like{this.state.like}</button>
                <button onClick={this.unLikeMe}>DisLike{this.state.unlike}</button>
            </div>
          );
    }
}
 
export default ActionCompo;