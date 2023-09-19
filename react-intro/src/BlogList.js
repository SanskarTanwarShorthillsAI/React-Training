const BlogsList = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    /* or we can use props destructuring like 
        const BlogsList = ( {blogs,title} ) => {}
    */

    return ( 

        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Cick to delete this blog</button>
                    {/* using this we are deleting the blog item using props */}
                </div>
            ))}
        </div>

     );
}
 
export default BlogsList;