
var express = require('express');

var router = express.Router();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:massi2008@localhost:5432/postgres");


let data;
/* GET users listing. */

router.post('/counter', async(req, res,next) => {

    await db.none(`insert into todo values('${req.body.todoDetails.id}','${req.body.todoDetails.value}','${req.body.todoDetails.isCompleted}')`)
console.log(req.body.todoDetails.id)
   data =await db.any(`select * from todo`)


          res.send(data)
});


router.post('/counter/delete', async function(req, res, next) {
    await db.none(`delete from todo where id='${req.body.id}'`)
    //taskList.splice(taskList.findIndex((elem) => elem.id === req.body.id), 1);
console.log(req.body)
    data =await db.any(`select * from todo`)

   res.send(taskList);
});




router.post('/counter/true', async function(req, res) {

     await db.none(`update todo set "isCompleted"='completed' where id='${req.body.id}'`)

    console.log(req.body.id)
    data =await db.any(`select * from todo`)

    res.send(data);
});
router.post('/counter/false', async function(req, res) {

    await db.none(`update todo set "isCompleted"='noCompleted'  where id='${req.body.id}'`)

    console.log(req.body.id)
    data =await db.any(`select * from todo`)
    taskList=data
    res.send(data);
});
router.get('/counter/laListe', async function(req, res, next) {
    data =await db.any(`select * from todo order by "isCompleted" desc `)

   // console.log(req.body.data)
    res.send(data);
});

router.get('/counterUF',async function (req, res, next) {
    data =await db.any(`select * from todo`)
    res.send(data);
});

/*router.get('/noCompleted',async function (req, res, next) {

 data =await db.any(`select * from todo `)
    console.log(data)
    res.send(data);
});*/
/*router.get('/completed',async function (req, res, next) {

 data =await db.any(`select * from todo `)
    console.log(data)
    res.send(data);
});*/
module.exports = router;