import React from 'react'
import NameEvent from './NameComment'
import CommentEvent from './Comment'
import ActionCompo from './ActionComment'

class FormComp extends React.Component {

    render() {
        return (

            <div>
                <NameEvent name={this.props.name}></NameEvent>
                <CommentEvent>Successfully Registered for the React Training</CommentEvent>
                <ActionCompo></ActionCompo>
            </div>
        );
    }
}

export default FormComp;