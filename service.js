var express = require ("express");
var app = express();
var pg = require ("pg");
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'word', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 3000, // how long a client is allowed to remain idle before being closed
};
app.listen(3000);
function users(id,username,password,mota,status,image){
  this.Id = id ;
  this.UserName = username ;
  this.PassWord = password;
  this.Mota = mota;
  this.Status = status;
  this.Image = image;
}
function words(id,name,speak,giaithich,vidu,image,vidudich,tuloai){
  this.Id = id ;
  this.Name = name ;
  this.Speak = speak;
  this.GiaiThich = giaithich;
  this.ViDu = vidu;
  this.Image = image;
  this.ViDuDich = vidudich;
  this.Tuloai = tuloai;
}
app.get("/user/:id",function(req,res){
  var id = req.params.id;
  console.log(id);
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM users WHERE id = '+id+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new users(result.rows[i].id,result.rows[i].username,result.rows[i].password,result.rows[i].mota,result.rows[i].status,result.rows[i].image)
        );
      }
      res.send(data);
    });
  });
});
app.get("/word/:id",function(req,res){
  var id = req.params.id;
  console.log(id);
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM words WHERE id = '+id+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new words(result.rows[i].id,result.rows[i].name,result.rows[i].speak,result.rows[i].giaithich,result.rows[i].vidu,result.rows[i].image,result.rows[i].vidudich,result.rows[i].tuloai)
        );
      }
      res.send(data);
    });
  });
});
app.get("/users/:page",function(req,res){
  var page = req.params.page;
  var lineinpage = 10;
  var where = (page-1)*lineinpage;
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM users LIMIT '+lineinpage+' OFFSET '+where+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new users(result.rows[i].id,result.rows[i].username,result.rows[i].password,result.rows[i].mota,result.rows[i].status,result.rows[i].image)
        );
      }
      res.send(data);
    });
  });
});
app.get("/words/:page",function(req,res){
  var page = req.params.page;
  var lineinpage = 5;
  var where = (page -1)*lineinpage;
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM words LIMIT '+lineinpage+' OFFSET '+where+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new words(result.rows[i].id,result.rows[i].name,result.rows[i].speak,result.rows[i].giaithich,result.rows[i].vidu,result.rows[i].image,result.rows[i].vidudich,result.rows[i].tuloai)
        );
      }
      res.send(data);
    });
  });
});
