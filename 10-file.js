console.log("Start");
const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/seconde.txt','utf8')
// console.log(first,second)
writeFileSync('./content/result-sync.txt',`Here is the result:${first},${second}`,{flag:'a'})
console.log("Done!")
console.log("Starting with the other task!")