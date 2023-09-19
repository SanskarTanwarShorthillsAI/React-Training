import Axios from "axios"
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


const Home = () => {
    
    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:8000/quotes")
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err));
    },[])

    const handelDelete = (id) =>{
        const confirm = window.confirm("Would you like to delete?")
        if(confirm){
            Axios.delete(`http://localhost:8000/quotes/${id}`)
            .then((res)=> {
                window.location.reload();
            })
            .catch((err)=>{
                console.error('Error', err);
            })
        }
    }

    return (
        <div className="homepage">
           <h1>List of Authors</h1>
           <div className="authorList">
                <div className="add-link">
                    <Link to="/create" className="add-btn">Add+</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Quotes</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, idx) =>(
                                <tr key={idx}>
                                    <td>{author.id}</td>
                                    <td>{author.author}</td>
                                    <td>{author.quote}</td>
                                    <td className="btn-grp">
                                        <button className="read-btn"><Link to={`/read/${author.id}`} className="link"> Read </Link> </button>
                                        <button className="edit-btn"><Link to={`/update/${author.id}`} className="link"> Edit </Link> </button>
                                        <button onClick={e => handelDelete(author.id)} className="delete-btn"> Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
           </div>
        </div>
      );
}
 
export default Home;