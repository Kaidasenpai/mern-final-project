const express = require('express')
const router = express.Router()
const {
    createBlog,
    getBlog,
    getBlogs,
    deleteBlog,
    updateBlog

} = require("../controllers/blogController")



// GET all blogs
router.get('/', getBlogs)

//GET a single blog
router.get('/:id', getBlog)

//POST a new blog
router.post('/', createBlog)

//DELETE a blog
router.delete('/:id', deleteBlog )

//UPDATE a blog
router.patch('/:id', updateBlog)


module.exports = router