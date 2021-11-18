const http = require('http')
const blogController= require('./controllers/blogController')
const con = http.createServer((req,res)=>{

    if(req.url==='/' && req.method==='GET'){
        blogController.getBlogs(req,res)
    }else if(req.url==='/blogs/add' && req.method==='POST'){
        blogController.addBlog(req,res)
    }else{
        res.writeHead(400,{'Content-Type' : 'application/json'})
        res.end(JSON.stringify({message:"invalid api endpoint"})) 
    }
})
con.listen(5000)