import React, { useState } from 'react'
import './Table.css'
import AddEmployee from './AddEmployee'

function Table({ employees }) {
  
  const [employee, setEmployee] = useState(employees)
  console.log(employee, 'employee')

  const onDelete = (e) => {
    if (!e.target.classList.contains('deleteBtn')) {
      return
    }
    const btn = e.target
    btn.closest('tr').remove()
  }

  const addEmployeeHandler = (emp) => {
    setEmployee(emp)
    //console.log(emp)
  }
  return (
    <div className="table">
      <AddEmployee
        addEmployeeHandler={addEmployeeHandler}
        employees={employees}
      />
      <table>
        <tr className="main_row">
          <td>First Name</td>
          <td>Last Name</td>
          <td>Occupation</td>
          <td>Date of Birth</td>
          <td>Delete</td>
        </tr>
        {employees.map((emp, i) => (
          <tr key={i}>
            <td>{emp.fname} </td>
            <td>{emp.lname} </td>
            <td>{emp.occupation} </td>
            <td>{emp.dob} </td>
            <td>
              <button className="deleteBtn" onClick={onDelete}>
                {' '}
                Delete
              </button>{' '}
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Table
