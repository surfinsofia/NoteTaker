//same code from apiroute index.js


const router = require('express').Router();
const fs = require('fs');
const path = require('path')
//sets data as empty array
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../Develop/db/db.json'), "utf8")) || [];


router.get ('/notes', (req, res)=>{
fs.readFile(path.join(__dirname, '../../../Develop/db/db.json'), 'utf-8', 
res.send(data)
)
});