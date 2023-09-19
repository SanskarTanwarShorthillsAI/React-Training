import {useEffect, useState} from 'react'
import BlogsList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title:"My new Website", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat?", author:"sanskar", id:1 },
        { title:"Welcome Party!", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat?", author:"ayush", id:2 },
        { title:"React tips", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, placeat?", author:"sanskar", id:3 }
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("sanskar")

    useEffect(()=>{
        console.log("useEffect ran");
        console.log(name);
    },[name])
    
    return ( 

        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
                    {/*   ↑    and    ↑    are props which are passed onto children components*/}
            {/* <BlogsList blogs={blogs.filter((blog) => blog.author === "sanskar")} title="Sanskar's Blogs!"/>  */}
                    {/*  Resuable Components with our needs*/}
            <p>{name}</p>
            <button onClick={() => setName("ayush")}>change name</button>        
        </div>

     );
}
 
export default Home;