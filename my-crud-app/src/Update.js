import Axios from "axios"
import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [inputData, setInputData] = useState({
        author: '',
        quote: ''
      });

    // const [author, setAuthors] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        Axios.get('http://localhost:8000/quotes/' + id)
        .then(res => {
            setInputData(res.data);
        })
        .catch(err => console.log(err));
    },[id])

    const navigate = useNavigate();

    const handleUpdate = (event)=>{
        event.preventDefault();
        Axios.put('http://localhost:8000/quotes/'+id, inputData)
        .then((res) => {
          alert('Data updated Successfully!');
          navigate('/');
        });
    }

    return (
        <div className='container'>
          <div className='create-cmp'>
            <h1>Update Quote</h1>
            <form onSubmit={handleUpdate}>
              <div className='author-input'>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  name='author'
                  value={inputData.author}
                  onChange={(event) => setInputData({ ...inputData, author: event.target.value })}
                />
              </div>
              <div className='quote-input'>
                <label htmlFor="quote">Quote:</label>
                <textarea
                  type="text"
                  name='quote'
                  value={inputData.quote}
                  onChange={(event) => setInputData({ ...inputData, quote: event.target.value })}
                />
              </div>
              <br />
              <button className='submit-btn'>Update</button>
              <button className="back-btn"><Link to="/" className="back-btn">Back</Link></button>
            </form>
          </div>
        </div>
      );
}
 
export default Update;