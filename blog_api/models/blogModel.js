let blogs= require('../data/blogdata.json')
let utils= require('../utils')


function fetchAll(){
    return new Promise((resolve, reject)=>{
        resolve(blogs)
    })

}

function fetchLast(){
    return new Promise((resolve, reject)=>{
        if(blogs.length==0){
            resolve(0)
        }
        else{
            resolve(blogs[blogs.length-1].id)
        }
    })

}

function addBlogData(data){
    return new Promise((resolve, reject)=>{
        try{
            blogs.push(data)
            utils.writeFile(blogs)
            resolve({message:"data saved successfully"})
        }catch{
            reject({"msg":"internal server error"})
        }
        })    
}

module.exports={
    fetchAll,
    addBlogData,
    fetchLast
}
