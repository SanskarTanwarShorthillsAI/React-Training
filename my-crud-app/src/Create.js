import React from "react"
import axios from 'axios';
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [inputData, setInputData] = useState({
      author: '',
      quote: ''
    });
  
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8000/quotes', inputData)
        .then((res) => {
          alert('Data Posted Successfully!');
          navigate('/');
        });
    };
  
    return (
      <div className='container'>
        <div className='create-cmp'>
          <h1>Add a new Quote</h1>
          <form onSubmit={handleSubmit}>
            <div className='author-input'>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                name='author'
                onChange={(event) => setInputData({ ...inputData, author: event.target.value })}
              />
            </div>
            <div className='quote-input'>
              <label htmlFor="quote">Quote:</label>
              <textarea
                type="text"
                name='quote'
                onChange={(event) => setInputData({ ...inputData, quote: event.target.value })}
              />
            </div>
            <br />
            <button className='submit-btn'>Submit</button>
            <button className="back-btn"><Link to="/" className="back-btn">Back</Link></button>
          </form>
        </div>
      </div>
    );
  }
  
 
export default Create;