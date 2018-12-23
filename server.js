let express=require('express');
let bodyParser=require('body-parser');
let app=express();
let morgan=require('morgan');

console.log("Changed by samir");

app.use(morgan('dev'));

app.use( bodyParser.urlencoded({extended:true}));
app.use( bodyParser.json());

 let environment=process.env.NODE_ENV || 'development';
 let config=require(__dirname+"/config/"+environment);
 console.log("config:",environment);


app.use(require('./api'));
app.listen(config.server.port);
console.log('API is runnig on port no:',config.server.port);

