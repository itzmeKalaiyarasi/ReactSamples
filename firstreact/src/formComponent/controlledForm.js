import React from 'react'
class ControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            programming: false
        }
        //this.handleNameChange = this.handleNameChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.knowProgram = this.knowProgram.bind(this)
        this.captureChange = this.captureChange.bind(this)
    }
    /*  handleNameChange(e) {
          this.setState({ name: e.target.value })
      }
  */
    knowProgram(e) {
        this.setState({ programming: e.target.checked })
    }


    submitForm(e) {
        e.preventDefault()
        console.log("Submitted")
        console.log(this.state)
    }
    captureChange(e) {
        this.setState({ [e.target.name]: [e.target.value] })

    }
    render() {
        return (
            <div>
                <h3>Controlled Form:</h3>
                <form onSubmit={this.submitForm}>
                    Name:<input type="text" name="name" value={this.state.name} onChange={this.captureChange} /> <br></br>
                    Email:<input type="email" name="email" value={this.state.email} onChange={this.captureChange} /> <br></br>
                    Know Programming:<input type="checkbox" name="programming" value={this.state.knowProgram} onChange={this.knowProgram} /><br></br>
                    <button type="Submit">Save</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;