const blogModel = require('../models/blogModel')
const utils = require('../utils')

async function getBlogs(req,res){
    const blogs = await blogModel.fetchAll()
    res.writeHead(200,{'Content-Type' : 'application/json'})
    res.end(JSON.stringify(blogs))
}

async function addBlog(req,res){
    const data = await utils.getReqData(req)
    const { name, description, img_url } = JSON.parse(data)
    const blog ={name,description,img_url}
    const msg = await blogModel.addBlogData(blog)
    res.writeHead(200,{'Content-Type' : 'application/json'})
    res.end(JSON.stringify(msg))
}

module.exports={
    getBlogs,
    addBlog,
}