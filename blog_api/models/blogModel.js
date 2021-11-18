let blogs= require('../data/blogdata.json')
let utils= require('../utils')

let incr=1;
function fetchAll(){
    return new Promise((resolve, reject)=>{
        resolve(blogs)
    })

}

function addBlogData(data){
    return new Promise((resolve, reject)=>{
        try{
            if(incr==0){
                blogs.push({id:1,...data})
            }
            else{
                incr+=1
                blogs.push({id:incr+1,...data})    
            }
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
}