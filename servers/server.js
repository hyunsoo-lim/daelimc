const express = require('express');
const app = express();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const port =process.env.PORT || 3001;
const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({extended:true}));
const multer = require('multer');
// 기타 express 코드
// const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });





app.listen(port, ()=>{
    console.log(`express is running on ${port} on!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
});


//select
app.get('/api/products',async (req, res) => {
    db.query("SELECT * FROM daelim_product", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
});

//search
app.post('/api/productssearch',urlencodedParser,(req,res) => {
    var json=req.body;
    console.log("productssearch");
    var params=json;
    console.log(params);
    var sql = "select * from daelim_product where name LIKE " +db.escape('%'+params+'%');

   
    db.query(sql,[params],function(err,rows,fields) {
      if(err){
        console.log(err);
      }else{
        res.send({ products : rows });
      }})
});


//insert
app.post('/api/productsins',urlencodedParser,(req,res) => {
    var json=req.body;
    var params=[json.type,json.type2,json.name,json.text1,json.text2,json.src]
    db.query("insert into daelim_product values(0,?,?,?,?,?,?)",params,function(err,rows,fields) {
        if(err){
          console.log(err);
        }else{
          res.send("ok");
          console.log("ok");
        }})
});


//insert
app.post('/api/productsdel',urlencodedParser,(req,res) => {
    
  var params=req.body;
  
  console.log(params);
  db.query("delete from daelim_product where no in(?)",[params],function(err,rows,fields) {
      if(err){
        console.log(err);
      }else{
        res.send("ok");
          console.log("ok");
        
      }})
});


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});


app.post('/api/imageupload', upload.single('img'), (req, res) => {
  console.log(req.file);
  res.send(req.file); 
});

app.use('/img',express.static('public'));



//download
app.get('/download/:download_name',async (req, res) => {
  var upload_folder = 'public/uploads/';
  var file = upload_folder + req.params.download_name; // ex) /upload/files/sample.txt
  
  try {
    if (fs.existsSync(file)) { // 파일이 존재하는지 체크
      var filename = path.basename(file); // 파일 경로에서 파일명(확장자포함)만 추출
      var mimetype = mime.getType(file); // 파일의 타입(형식)을 가져옴
    
      res.setHeader('Content-disposition', 'attachment; filename=' + filename); // 다운받아질 파일명 설정
      res.setHeader('Content-type', mimetype); // 파일 형식 지정
    
      var filestream = fs.createReadStream(file);
      filestream.pipe(res);
    } else {
      res.send('해당 파일이 없습니다.');  
      return;
    }
  } catch (e) { // 에러 발생시
    console.log(e);
    res.send('파일을 다운로드하는 중에 에러가 발생하였습니다.');
    return;
  }
});