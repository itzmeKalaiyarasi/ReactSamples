import React from 'react'
import ReactDOM from 'react-dom'
import FirstFriend from './FirstComponent'
import SecondFriend from './SecondComponent'
import Name from './components/Name'
import FormComp from './EventHandlingComponent/FormComment'
import LifeCycleComponent from './lifeCycleComponent/LifeCycleComponent'
import FormComponent from './formComponent/formComponent'
import ControlledForm from './formComponent/controlledForm'
import RemoteData from './APIComponent/RemoteData'

var position = document.getElementById("container2");
var position1 = document.getElementById("lifeCycle")
ReactDOM.render(
<div>
<FirstFriend location="Chennai">Kalaiyarasi</FirstFriend>
<Name fcolor="red">G</Name>
<Name fcolor="blue">O</Name>
<Name fcolor="green">P</Name>
<Name fcolor="yellow">I</Name>
</div>,
   document.getElementById("reactId"))
   
ReactDOM.render(<SecondFriend profession="Developer"> </SecondFriend>,position)

ReactDOM.render(
<div>
    <FormComp name="Kalaiyarasi">   </FormComp>
    <FormComp name="Kalai">   </FormComp>
    <FormComp name="Gopi" >   </FormComp>
</div> 
    ,document.getElementById("nameContainer"))

ReactDOM.render(<div>
    <div><LifeCycleComponent></LifeCycleComponent></div>
    <p></p>
    <div><FormComponent></FormComponent></div>
    <p></p>
    <div><ControlledForm></ControlledForm></div>
    <p></p>
    <div><RemoteData></RemoteData></div>
    </div>
    ,position1)