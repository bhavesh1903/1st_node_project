'use strict'
let express=require('express');
let router=express.Router();
let controller=require('./controllers/controllers.student');

//console.log('controller',controller.listofstudent);
router.get('/api/Students',controller.listofstudent);
router.post('/api/Students',controller.createstudent);
router.get('/api/Students/:id',controller.getstudent);
router.put('/api/Students/:id',controller.Updatestudent);
router.delete('/api/Students/:id',controller.RemoveStudent);


module.exports=router;