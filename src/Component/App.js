import React, { Component } from 'react'
import Table from './Table'
import SearchBox from './SearchBox'
import { employees } from '../Employee'
import Footer from './Footer'
import './styles.css'

class App extends Component {
  constructor() {
    super()
        this.state = {
        employees: employees,
        searchField: '',
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredEmp = this.state.employees.filter((data) => {
      return data.fname
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={this.searchField}
        />
        <Table employees={filteredEmp} />
        <Footer />
      </div>
    )
  }
}
export default App
