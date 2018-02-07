var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/minidairy"
var login={
    add:function(req,res){
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr = JSON.parse(dataPart);
        });
        req.addListener('end',function(){
            console.log(qStr);
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end(err);db.close();return;}
                db.collection('users').insert(qStr);
                    res.write('1');
                    res.end();
                    db.close();
            })
        })
    },
    get:function(req,res){
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr = JSON.parse(dataPart);
            console.log(qStr);
        });
        req.addListener('end',function(){
            // qStr=querystring.parse(qStr)
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end(err);db.close();return;}
                console.log(qStr);
                db.collection('users').find(qStr,{_id:0}).toArray(function(err,result){
                    console.log(result)
                    res.write(JSON.stringify({
                        data:result
                    }))
                    res.end();
                    db.close()
                })
            })
        })
    }
}
module.exports=login;