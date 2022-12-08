const fs = require('node:fs').promises;
const path = require('node:path');



const boysPath = path.join(__dirname, 'boys');
const girlsPath = path.join(__dirname, 'girls');


console.log(boysPath);
console.log(girlsPath);

fs.readdir(boysPath).then((files)=> files.forEach(file =>{
    fs.readFile(path.join(boysPath, file))
        .then(el => {
            if(JSON.parse(el).gender === "woman"){
                fs.rename(path.join(boysPath,file), path.join(girlsPath,file), console.log("Файл переміщено"))
            }
        } )
}))


fs.readdir(girlsPath).then((files)=> files.forEach(file =>{
    fs.readFile(path.join(girlsPath, file))
        .then(el => {
            if(JSON.parse(el).gender === "man"){
                fs.rename(path.join(girlsPath,file), path.join(boysPath,file), console.log("Файл переміщено"))
            }
        } )
}))