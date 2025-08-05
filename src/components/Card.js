import React, { useState } from 'react'

function Card(props) {


      return (
    <div className='card'>
        <h3>Thought #{props.num}</h3>
        <p>{props.thoughts}</p>
        <button className='close-button' onClick={props.handleDelete}type='button'>X</button>
        <button className='edit-button' onClick={props.handleEdit}>Edit</button>
       

    </div>
  )
}

export default Card