const fs = require('fs');

const readStream = fs.createReadStream('./blog3.txt',{encoding:'utf8'});

const writeStream = fs.createWriteStream('./blog4.txt');
// event listener .on  
// --data:flow of data --chunk:small piece of data

readStream.on('data',(chunk)=>{
    console.log('-----NEW CHUNK ------');
    console.log(chunk);
    // writing to file
    writeStream.write('\n New Chunk \n');
    writeStream.write(chunk);
});

// piping --easy way writing to file
// readStream.pipe(writeStream);