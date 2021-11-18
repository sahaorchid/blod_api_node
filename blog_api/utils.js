const fs = require('fs')
function getReqData(req){
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(err)
        }
    })
}

function writeFile(data){
    fs.writeFileSync('./data/blogdata.json', JSON.stringify(data), 'utf8', (err) => {
        if(err) {
            console.log(err)
        }
    })
}

module.exports={
    getReqData,
    writeFile,
}