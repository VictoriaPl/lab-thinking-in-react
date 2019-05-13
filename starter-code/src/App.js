import React, { Component } from 'react'
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>IronRoducts</h1>
        <FilterableProductTable />
      </div>
    )
  }
}

export default App