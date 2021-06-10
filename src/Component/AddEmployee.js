import React, { Component } from 'react'
import './AddEmployee.css'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = { fname: '', lname: '', occupation: '', dob: '' }
  }

  add = (e) => {
    e.preventDefault()
    if (
      this.state.fname === '' ||
      this.state.lname === '' ||
      this.state.occupation === '' ||
      this.state.dob === ''
    ) {
      alert('Please fill out the form')
      return null
    }
    this.props.addEmployeeHandler(this.state)
    //console.log(".....", this.state);
    this.props.employees.push(this.state)
    this.setState({ fname: '', lname: '', occupation: '', dob: '' })
  }

  render() {
    return (
      <div className="container">
        <h2> Add Employee</h2>
        <form className="" onSubmit={this.add}>
             <div className="form_container">
              <label> First Name:</label>
              <input
              type="text"
              value={this.state.fname}
              name="fname"
              placeholder="Enter your First Name"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
            </div>

          <div className="form_container">
            <label> Last Name:</label>
            <input
              type="text"
              value={this.state.lname}
              name="lname"
              placeholder="Enter your Last Name"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>

          <div className="form_container">
            <label> Occupation:</label>
            <input
              type="text"
              value={this.state.occupation}
              name="occupation"
              placeholder="Enter your Occupation"
              onChange={(e) => this.setState({ occupation: e.target.value })}
            />
          </div>
          <div className="form_container">
            <label> Date of Birth:</label>
            <input
              type="text"
              value={this.state.dob}
              name="dob"
              placeholder="Enter your Date of Birth"
              onChange={(e) => this.setState({ dob: e.target.value })}
            />
          </div>
          <button className="btn" type="submit">
            {' '}
            Add
          </button>
        </form>
      </div>
    )
  }
}
export default AddEmployee
