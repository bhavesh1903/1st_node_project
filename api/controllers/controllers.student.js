'use strict'

let Student=require('../../models/student.model');

function getStudent(req,res){
    console.log('GetStudent');
    Student.find().then((Student)=>{
        res.send(Student);
    }).catch((error)=>{
        res.send(error);
    })
}

function postStudent(req,res){
    console.log('post student');
    let student=new StudentContoller();
    console.log('StudentContoller',StudentContoller);
    console.log('req.body',req.body);
    student.Firstname=req.body.Firstname;
    student.Lastname=req.body.Lastname;
    student.Rollno=req.body.Rollno;
    student.Groupno=req.body.Groupno;
    student.Age=req.body.Age;
    student.Schoolname=req.body.Schoolname;
    console.log('')
    student.save().then((Student)=>{
        res.send(Student);
    }).catch((error)=>{
        res.send(error);
    });
}

function getIdStudent(req,res){
    let studentId=req.params.id;    
    Student.findById({_id:studentId}).then((Student)=>{
        res.send(Student);
    }).catch((error)=>{
        res.send(error);
    }); 
}


function putStudent(req,res){
    let studentId=req.params.id;    
    Student.findById({_id:studentId}).then((Student)=>{
        Student.Firstname=req.body.Firstname;
        Student.Lastname=req.body.Lastname;
        Student.Rollno=req.body.Rollno;
        Student.Groupno=req.body.Groupno;
        Student.Age=req.body.Age;
        Student.Schoolname=req.body.Schoolname;
        Student.save().then((Student)=>{
            res.send(Student);
        }).catch((error)=>{
            res.send(error);
        });
    }).catch((error)=>{
        res.send(Student);
    }); 
}

function deleteStudent(req,res){
    let studentId=req.params.id;
    Student.remove({_id:studentId}).then((student)=>{
        res.send(student);
    }).catch((error)=>{
        res.send(error);
    });
}

module.exports={
    listofstudent:getStudent,
    createstudent:postStudent,
    getstudent:getIdStudent,
    Updatestudent:putStudent,
    RemoveStudent:deleteStudent
};

// employee.find().then((employee)=> {
//     res.send(employee);
// }).catch((error)=> {
//     res.send(error);
// })

// }
