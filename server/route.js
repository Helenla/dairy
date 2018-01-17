var login=require('./loginRoute.js');
var node=require('./nodeRoute.js')
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
        default:break;
    }
}
module.exports=route;