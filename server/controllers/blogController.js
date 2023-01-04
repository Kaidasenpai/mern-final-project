const Blog = require('../models/blogModel')
const mongoose = require ('mongoose')


// get all blogs
const getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({ createdAT: 1 })
    res.status(200).json(blogs)

}


// get a single blog
const getBlog = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Blog" })
    }

    const blog = await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }

    res.status(200).json(blog)

}

// create new blog
const createBlog = async (req, res) => {
    const { title, content, author } = req.body

    // add doc to db
    try {
        const blog = await Blog.create({ title, content, author })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete blog
const deleteBlog = async (req, res) =>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Blog" })
    }

    const blog = await Blog.findOneAndDelete({_id: id})
    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }

    res.status(200).json(blog)

  
}

// update a blog

const updateBlog = async (req, res ) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such blog" })
    }

    const blog = await Blog.findOneAndUpdate({_id: id}, {
        ...req.body

    })
    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }

    res.status(200).json(blog)
}

module.exports = {
    getBlog,
    getBlogs,
    createBlog,
    deleteBlog,
    updateBlog

}