var login=require('./login.js');
var node=require('./nodeData.js');
var other=require('./otherData.js');
var dairy=require('./dairyData.js');
var person=require('./personData.js')
function route(req,res){
    var reg=/^\/(\w+)\/(\w+)/;
    var result=req.url.match(reg);
    console.log('req:'+req)
    console.log(result[1])
    switch(result[1]){
        case 'login':
            login[result[2]](req,res);
            break;
        case 'node':
            node[result[2]](req,res);
            break;
        case 'dairy':
            dairy[result[2]](req,res);
            break;
        case 'person':
            person[result[2]](req,res);
            break;
        case 'other':
            other[result[2]](req,res);
            break;
        default:break;
    }
}
module.exports=route;