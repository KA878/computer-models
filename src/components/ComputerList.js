import * as React from 'react'


export default function ComputerList(props) {
    return (
      <label>
      <select >
        { props.computers.map ( computer =>  
        <option key={props.computers.indexOf(computer)} >
        {`${computer[0]} (${computer[1].year})`}
        </option>  )}
               
      </select>
       
      </label>
    )
  }

  