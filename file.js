// fs-file system
const fs = require('fs');

// reading files
// Asynchronous callback function 
fs.readFile('./read.txt',(err,data)=>
{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files

fs.writeFile('./write.txt','Hello World',()=>{
    console.log('file was written');
});

// directories
if (!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',(err)=>{
        if (err)
        {
            console.log(err);
        }
        console.log('folder created');
       });
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log('folder deleted');
    })
}


// deleting files
if (fs.existsSync('./deleteme.txt'))
{
    fs.unlink('./deleteme.txt',(err)=>{
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}