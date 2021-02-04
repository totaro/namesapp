/* --------------------------------------
The user interface provides following functionality.

 - List names and amounts, order by amount, most popular first
 - List names in alphabetical order
 - The total amount of all the names
 - Different names

The data for the application is stored in a json file (names.json).

Methods used: sort(), reduce() and lenght()

04022021 - totaro
---------------------------------------*/

import React, { Component } from 'react'
import NamesList from './namelist'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Name Application - reading/sorting/counting json -file</h1>
		<NamesList />
      </div>
    )
  }
}
export default App
