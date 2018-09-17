import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectFeedback from '../actions/index'

class FeedbackTitle extends React.Component {

    displayAllTitles() {
        return this.props.propsFeedbackTitles.map((fb) => {
            return (<li key={fb.id}
                onClick={() => {this.feedbackClicked(fb)}}> {fb.title}

            </li>)
        })


    }

    feedbackClicked(fb){
        this.props.selectFeedback(fb)
    }
    render() {
        return (<div>
            <ul>
                {this.displayAllTitles()}
            </ul>
        </div>);
    }
}

function connectStoreToComponentAsProps(state) {
    return {
        propsFeedbackTitles: state.allFB
    }
}

function bindActionCreatorToComponentAsProps(dispatch) {

    console.log(dispatch)
    return bindActionCreators({selectFeedback: selectFeedback }, dispatch)
        
   
}

export default connect(connectStoreToComponentAsProps,bindActionCreatorToComponentAsProps)(FeedbackTitle);