import React from 'react'
import './SearchBox.css'

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="input_Container">
      <input
        className="input"
        type="search"
        placeholder="Search Employee"
        onChange={searchChange}
      />
    </div>
  )
}
export default SearchBox
