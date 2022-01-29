// const {readFileSync, writeFileSync}= require('fs')
// //sync
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// const write = writeFileSync('./content/result.txt',`Here is the result of ${first} and ${second}`, 
// {flag:'a'} )
// console.log(first, second);

//without sync

const {readFile, writeFile} = require('fs')
console.log('starting this task');
readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return null;
}
const first = result
readFile('./content/second.txt','utf8',(err,resullt)=>{
    if(err){
        console.log(err);
        return null;
    }
    const second=result
})
writeFile('./content/second.txt',`result of two strings, ${first}`,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('done with this task');

})
})
console.log('starting next task');