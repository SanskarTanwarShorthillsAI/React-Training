import Axios from "axios"
import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"

const Read = () => {
    const [author, setAuthors] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        Axios.get('http://localhost:8000/quotes/' + id)
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err));
    },[id])
    
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>User Detail</h3>
                <div className='text-white'>
                    <div className="mb-2"><strong>{author.id}</strong></div>
                    <div className="mb-2"><strong>{author.author}</strong></div>
                    <div className="mb-3"><strong>{author.quote}</strong></div>
                    <button><Link to={`/update/${id}`} className=''>Edit</Link></button>
                    <button><Link to="/" className='ms-3'>Back</Link></button>
                </div>
            </div>
        </div>
      );
}
 
export default Read;