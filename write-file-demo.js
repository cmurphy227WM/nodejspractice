const fs = require('fs');

let jsonString = {"name": "CONNOR MURPHY"};

fs.writeFile('data2.json', JSON.stringify(jsonString), function(err){
    if(err){
        console.log(err);
    }
})