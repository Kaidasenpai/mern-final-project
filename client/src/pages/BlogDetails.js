import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from '../hooks/useAuthContext'

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const { user } = useAuthContext();


    const history = useNavigate();

    useEffect(() => {

        const fetchBlog = async () => {
            const response = await fetch(`/api/blogs/${id}`, {
                method: "GET"
            })
            const json = await response.json()

            if (response.ok) {
                setBlog(json)
            }
        }
        fetchBlog()


    }, [id])

    const handleClick = async () => {


        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            setBlog(json)
            history('/Blogs')
        }
    }

    return (

        <div className="blog-details">

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by {blog.author}  {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>
                    <div className="article">{blog.content}</div>
                    <button onClick={() => history('/Blogs')}>Back</button>
                    {user && (

                        <button onClick={handleClick}>Delete</button>


                    )}

                </article>
            )}

        </div>
    );
}

export default BlogDetails;