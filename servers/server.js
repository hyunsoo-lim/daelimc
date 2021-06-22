const express = require('express');
const vhost = require("vhost");
const app = express();
const app1 = express();
const app2 = express();
const app3 = express();
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


app.use(vhost("daelimc.co.kr", app2));
app.use(vhost("sub.daelimc.co.kr", app3));


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


//count 전체
app.get('/api/productscount',async (req, res) => {
    db.query("SELECT COUNT(*) as cnt FROM daelim_product", (err, data) => {
        if(!err) res.send(data);
        else res.send(err);
    })
});

app.get('/api/plancount',async (req, res) => {
  db.query("SELECT COUNT(*) as cnt FROM daelim_plan", (err, data) => {
      if(!err) res.send(data);
      else res.send(err);
  })
});

//search
app.post('/api/productssearch',urlencodedParser,(req,res) => {
    var json=req.body;
    console.log("productssearch");
    var params=json;
    console.log(params);
    var sql = "select * from daelim_product where text2 LIKE " +db.escape('%'+params.search+'%')  +"LIMIT " +(params.currentpage*10)+ ",10";

   
    db.query(sql,[params],function(err,rows,fields) {
      if(err){
        console.log(err);
      }else{
        res.send({ products : rows });
      }})
});


app.post('/api/plansearch',urlencodedParser,(req,res) => {
  var json=req.body;
  console.log("plansearch");
  var params=json;
  console.log(params);
  var sql = "select * from daelim_plan where name LIKE " +db.escape('%'+params.search+'%')  +"LIMIT " +(params.currentpage*10)+ ",10";

 
  db.query(sql,[params],function(err,rows,fields) {
    if(err){
      console.log(err);
    }else{
      res.send({ products : rows });
    }})
});


//search 메인에 노출 2개
app.get('/api/productmainpage',urlencodedParser,(req,res) => {
  console.log("productssearch2");
  var sql = "select * from daelim_product where no=17 or no=18 or no=26";

  db.query(sql,[],function(err,rows,fields) {
    if(err){
      console.log(err);
    }else{
      res.send({ products : rows });
    }})
});


//insert
app.post('/api/productsins',urlencodedParser,(req,res) => {
    var json=req.body;
    var params=[json.type,json.type2,json.name,json.text1,json.text2,json.download]
    db.query("insert into daelim_product values(0,?,?,?,?,?,?)",params,function(err,rows,fields) {
        if(err){
          console.log(err);
        }else{

          if(!fs.existsSync("public/uploads/"+json.name)){
            fs.mkdirSync("public/uploads/"+json.name)
          }
          var jsonparse=JSON.parse(json.download);
          if(jsonparse!=null){
          for(var i=0; i<jsonparse.data.length; i++){
              console.log(i);
              fs.rename(`public/uploads/${jsonparse.data[i]}`,`public/uploads/${json.name}/${jsonparse.data[i]}`,()=>{ 
         
              //파일 이름 바꾸기 fs.writeFile('./data/'+title,'파일수정할내용','utf8',function(err){ 
              // 파일 내용 수정 if (err ===undefined || err == null){ response.writeHead(302, {Location: `/?id=${title}`}); 
              //요청한 주소로 리다이렉션 response.end(); } }); 
              });
            }
          }
          res.send("productsinsok");
          console.log("productsins");
        }})
});


//insert plan
app.post('/api/planins',urlencodedParser,(req,res) => {
  var json=req.body;
  var params=[json.name,json.download,json.etc]
  db.query("insert into daelim_plan values(0,?,?,?)",params,function(err,rows,fields) {
      if(err){
        console.log(err);
      }else{

        if(!fs.existsSync("public/uploads/plan/"+json.name)){
          fs.mkdirSync("public/uploads/plan/"+json.name)
        }
        var jsonparse=JSON.parse(json.download);
        if(jsonparse!=null){
        for(var i=0; i<jsonparse.data.length; i++){
            console.log(i);
            fs.rename(`public/uploads/${jsonparse.data[i]}`,`public/uploads/plan/${json.name}/${jsonparse.data[i]}`,()=>{ 
       
            //파일 이름 바꾸기 fs.writeFile('./data/'+title,'파일수정할내용','utf8',function(err){ 
            // 파일 내용 수정 if (err ===undefined || err == null){ response.writeHead(302, {Location: `/?id=${title}`}); 
            //요청한 주소로 리다이렉션 response.end(); } }); 
            });
          }
        }
        res.send("planinsok");
        console.log("planinsok");
      }})
});

//delete
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


app.post('/api/plandel',urlencodedParser,(req,res) => {
    
  var params=req.body;
  
  console.log(params);
  db.query("delete from daelim_plan where no in(?)",[params],function(err,rows,fields) {
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
  console.log(req.body.name);

  if(!fs.existsSync("public/uploads/"+req.body.name)){
    fs.mkdirSync("public/uploads/"+req.body.name)
  }
 
    fs.rename(`public/uploads/${req.file.filename}`,`public/uploads/${req.body.name}/${req.file.filename}`,()=>{ 
 
    //파일 이름 바꾸기 fs.writeFile('./data/'+title,'파일수정할내용','utf8',function(err){ 
      // 파일 내용 수정 if (err ===undefined || err == null){ response.writeHead(302, {Location: `/?id=${title}`}); 
      //요청한 주소로 리다이렉션 response.end(); } }); 
      res.send(req.file); 
    });
});

app.post('/api/imageuploadmulti', upload.array('files'), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.json("{}");
});

// app.use('/img',express.static('public'));



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