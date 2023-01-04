import { useState } from "react";

const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = { title, author, content }

        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'

            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setContent('')
            setError(null)
            console.log('new article added', json)
        }

    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 className="flex justify-center text-4xl text-green-700 pt-20 font-bold">Add a New Article</h3>
            <div className=" ">
            <label className="flex justify-center pt-24">Article Title:</label>
                <div className="flex justify-center pt-5">
                    
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                </div>
                <label className="flex justify-center pt-3">Author:</label>
                <div className="flex justify-center pt-3">
                    <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <label className="flex justify-center pt-3" >body:</label>
                <div className="flex justify-center pt-3">
                    <textarea
                        type="text"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        className="box-content h-40 w-1/2 p-4 border-4"
                    />
                </div>
            </div>

            <div className="flex justify-center pt-5">
                <button className="bg-[#00d14d] border-r-4 border-spacing-0 p-5 mb-5 cursor-pointer rounded-md drop-shadow-lg">Add Article</button>
                {error && <div className="error">{error}</div>}
            </div>
        </form>


    );
}

export default BlogForm;