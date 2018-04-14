var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/minidairy"
var person = {
    edit:function(req,res){
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr = JSON.parse(dataPart);
        });
		//从请求体中获取完请求数据会触发end事件
		req.addListener('end',function(){
			MongoClient.connect(DB_STR,function(err,db){
			if(err){console.log(err);res.end();db.close();return;}
			db.collection('person').update({"username":qStr.username},{$set:{"username":qStr.username,"sex":qStr.sex,"birth":qStr.birth,"word":qStr.word}},{upsert:true},function(err,result){
                    res.write("1");
                    res.end();
                    db.close();
                });
			});
		});
    },
    get:function(req,res){
        var qStr='',result;
        req.addListener('data',function(dataPart){
            qStr = JSON.parse(dataPart);
            console.log(qStr);
        });
        req.addListener('end',function(){
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end(err);db.close();return;}
                console.log(qStr);
                db.collection('person').find(qStr,{_id:0},).toArray(function(err,result){
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
module.exports = person;