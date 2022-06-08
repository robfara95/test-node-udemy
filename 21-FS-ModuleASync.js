const {readFile,writeFile} = require('fs');

console.log('-----------------start ASync Task-------------------------');

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    } 
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('I writing file-->', result)
            console.log('-----------------Done ASync Task--writing file--------------');
        });
    })     
})
console.log('-----------------starting Next task-------------------------');