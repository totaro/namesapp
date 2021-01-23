import React, { Component } from 'react'
import NamesList from './namelist'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>dev-academy-2021 exercise - Name Application</h1>
		<NamesList />
      </div>
    )
  }
}
export default App
