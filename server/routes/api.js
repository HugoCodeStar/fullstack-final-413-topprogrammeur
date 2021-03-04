
var express = require('express');

var router = express.Router();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:massi2008@localhost:5432/postgres");


let data;
/* GET users listing. */

router.post('/counter', async(req, res,next) => {

    await db.none(`insert into todo values('${req.body.todoDetails.id}','${req.body.todoDetails.value}','${req.body.todoDetails.isCompleted}')`)
    data =await db.any(`select * from todo`)
          res.send(data)
});

router.post('/counter/delete', async function(req, res, next) {
    await db.none(`delete from todo where id='${req.body.id}'`)
    data =await db.any(`select * from todo`)
          res.send(data);
});

router.post('/counter/true', async function(req, res) {
    await db.none(`update todo set "isCompleted"='completed' where id='${req.body.id}'`)
    data =await db.any(`select * from todo`)
          res.send(data);
});

router.post('/counter/false', async function(req, res) {
    await db.none(`update todo set "isCompleted"='noCompleted'  where id='${req.body.id}'`)
    data =await db.any(`select * from todo`)
          res.send(data);
});

router.get('/counter/laListe', async function(req, res, next) {
    data =await db.any(`select * from todo order by "isCompleted" desc `)
          res.send(data);
});

router.get('/counterUF',async function (req, res, next) {
    data =await db.any(`select * from todo`)
         res.send(data);
});

module.exports = router;