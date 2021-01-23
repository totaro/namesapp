import React, { Component } from 'react'
import NamesData from './data/names.json'

  var differentNames = Object.keys(NamesData.names).length;
  console.log(differentNames);
  
  const totalAmount = NamesData.names.reduce((acc, name) => acc + name.amount, 0);
  console.log(totalAmount);

class NamesList extends Component {

  render () {
	  
	return (
    <div class="container">
       
	   <table>
	   <tbody>
			<tr>
			<td colSpan="2">List names and amounts, order by amount, most popular first</td>
			</tr>
            <tr>
				<th>Name</th>
				<th>Amount</th>
			</tr>
             
			{NamesData.names.sort((a, b) => b.amount - a.amount).map((item, i) => (
			<tr key={i}>
			 <td>{item.name}</td>
             <td>{item.amount}</td>
			</tr>
			))}
        </tbody>
        </table>

		<table>
        <tbody>
             <tr>
			<td >List names in alphabetical order</td>
			</tr>
			<tr>
            <th>Names</th>
             </tr>				
			{NamesData.names.sort((a, b) => a.name.localeCompare(b.name)).map((item, i) => (
             <tr key={i}>
			 <td>{item.name}</td>
            </tr>
			))}
        </tbody>
        </table>

		<table>
        <tbody>
            <tr>
			<td >The total amount of all the names</td>
			</tr>
			<tr>
            <th>{totalAmount}</th>
            </tr>
			<tr>
			<td >Different names</td>
			</tr>
			<tr>
            <th>{differentNames}</th>
            </tr>
		</tbody>
        </table>
	
    </div>
	)
  }
}

export default NamesList