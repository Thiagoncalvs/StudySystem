import fs from 'fs';
import VariavelToAdd from './Main.js';  
import fetch from "node-fetch";

let ContentToAdd = VariavelToAdd

fs.readFile('./JSONs/EstruturaMain.json', (err, data)=>{
    let json = JSON.parse(data)
    json.EstruturaPrincipal.push(...ContentToAdd)
//  
// console.log(json)
    fs.writeFile('./JSONs/EstruturaMain.json', JSON.stringify(json, null, 1), (err, result)=>{
        if(err) console.log('error', err);
    })
})