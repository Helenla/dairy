var login=require('./login.js');
var node=require('./nodeData.js');
var other=require('./otherData.js');
var dairy=require('./dairyData.js');
function route(req,res){
    var reg=/^\/(\w+)\/(\w+)/;
	var result=req.url.match(reg);
    switch(result[1]){
        case 'login':
            login[result[2]](req,res);
            break;
        case 'node':
            node[result[2]](req,res);
            break;
        case 'dairy':
            node[result[2]](req,res);
            break;
        case 'other':
            node[result[2]](req,res);
            break;
        default:break;
    }
}
module.exports=route;