const express = require ('express')
const path = require ('node:path')
const app = express()
const port = 3000
let pic,id;

let mypath = "D:\\Git\\puzzle"

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(mypath,'index.html'))
})

app.get('/img/:id',(req,res)=>{
  id=req.params.id;
  if(id==0){
    pic="numpic/";
  }
  else if(id==1){
    pic="scene1/";
  }
  else if(id==2){
    pic="scene2/";
  }
  else if(id==3){
    pic="scene3/";
  }
  else if(id==4){
    pic="scene4/";
  }
  else if(id==5){
    pic="scene5/";
  }
  res.render('puzzle',{pic:pic});
  console.log(req.params.id,pic);

})
app.post('/img/',(req,res)=>{
  res.json(pic);
  console.log(pic);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})