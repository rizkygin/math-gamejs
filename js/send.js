import * as fs from 'fs'
// import log from '../log.json';
// console.log(log)
try{
    console.log(
    fs.readFileSync('./eventListener.js').toString()
    )
}
catch (error ){
    console.log(error)
}

