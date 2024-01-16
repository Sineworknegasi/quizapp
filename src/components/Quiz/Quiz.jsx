import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        <h2>1. Which device is required for the internet connection</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>Lan Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className='index'> 1 of 5 questions</div>
    </div>
  )
}

export default Quiz