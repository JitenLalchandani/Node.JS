const {readFile,writeFile}=require('fs')
const util=require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile)
const start=async()=>{
    try{
        const first=await readFilePromise('./content/first.txt','utf8')
        const second=await readFilePromise('./content/seconde.txt','utf8')  
        await writeFilePromise('./content/result-mind-grenade.txt',`This is Awesome:${first},${second}`)
        console.log(first);
        console.log(second);
    }
    catch(err){
        console.log(err)
    }
}
start();
// getText('./content/first.txt')
//     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((err) => {
        //         console.log(err);
        //     });
// let getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }