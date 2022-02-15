const fs = require('fs');
const path = require("path");

fs.mkdir(path.join(__dirname, 'main'), (err) => {
     if(err){
       console.log(err)
    }
 })
fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if(err){
        console.log(err);

    }
})
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if(err){
        console.log(err);

    }
})

const inPersonUsers  = [
    {name: 'Andrii', age: 22, city: 'Lviv'},
    {name: 'Lina', age: 12, city: 'Sancey'}
]
const onlineUsers = [
    {name: 'Cergii', age: 35, city: 'Chop'},
    {name: 'Marina', age: 28, city: 'Kharkiv'}
]


function greeting() {
    fs.truncate(path.join(__dirname, 'main', 'inPerson', 'file.txt'), (err) => {
        if(err){
            console.log(err);
        }
    })
    let linePerson;
    let linePerson1;
    let linePerson2;
    for (let line of onlineUsers){
        linePerson = line.name;
        linePerson1 = line.age;
        linePerson2 = line.city;
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),`\nName: ${linePerson}, Age: ${linePerson1}, City: ${linePerson2}`, (err) => {
            if(err){
                console.log(err);
                throw err
            }else{
                console.log(linePerson);
                console.log(linePerson1);
                console.log(linePerson2)

            }
        })

    }

    fs.truncate(path.join(__dirname, 'main', 'online', 'file.txt'), (err) => {
        if(err){
            console.log(err);
        }
    })

    let lineUsers
    let lineUsers1;
    let lineUsers2;
    for (let online of inPersonUsers){
        lineUsers = online.name;
        lineUsers1 = online.age;
        lineUsers2 = online.city;
        fs.appendFile(path.join(__dirname, 'main', 'online', 'file.txt'),`\nName: ${lineUsers}, Age: ${lineUsers1}, City: ${lineUsers2}`,  (err) => {
            if(err){
                console.log(err);
                throw err
            }else{
                console.log(lineUsers);
                console.log(lineUsers1);
                console.log(lineUsers2);
            }
        })
    }
}

greeting();