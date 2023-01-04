import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'


const BlogList = () => {
    const [blogs, setBlogs] = useState(null)
    const history = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if (response.ok) {
                setBlogs(json)
            }
        }
        fetchBlogs()

    }, [])

    return (
        <div className="blogg">
            <p className=" flex justify-center font-semibold text-4xl text-green-700">Articles</p>
            {user && (

                <button onClick={() => history('/create')}>New article</button>


            )}

            {blogs && blogs.map((blog) => (

                <article className='blog-preview'>
                    <Link to={`/Blog/${blog._id}`} key={blog._id} blog={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </article>
            ))}
        </div>
    );
}
export default BlogList;