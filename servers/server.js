const express = require('express');
const app = express();
const port =process.env.PORT || 3001;
const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});



app.get('/api/products', (req, res) => {
    db.query("SELECT * FROM daelim_product", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
});

app.post('/api/productsins',urlencodedParser,(req,res) => {
    
    var json=req.body;
    var params=[json.type,json.type2,json.name,json.text1,json.text2,json.src]


   
    
    db.query("insert into daelim_product values(0,?,?,?,?,?,?)",params,function(err,rows,fields) {
        if(err){
          console.log(err);
        }else{
          console.log(rows.insertId);
          res.redirect('http://localhost:3000/ins');
        }})
});
