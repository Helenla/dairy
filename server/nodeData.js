var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/minidairy"
var node={
    add:function(req,res){
        console.log('添加...')
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr+=dataPart;
        });
        req.addListener('end',function(){
            var seqorator=querystring.parse(qStr);
            // console.log(seqorator)
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end();db.close();return;}
                var collection=db.collection('node');
                collection.insert(seqorator);
                    res.write('1');
                    res.end();
                    db.close();
            })
        })
    },
    get:function(req,res){
        console.log('获取数据...')
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr+=dataPart
        });
        req.addListener('end',function(){
            var seqorator=querystring.parse(qStr);
            // console.log(seqorator);
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end();db.close();return;}
                db.collection('node').find(seqorator,{_id:0}).sort({"lis":-1}).toArray(function(err,result){
                    res.write(JSON.stringify({
                        data:result
                    }))
                    // console.log(result)
                    res.end();
                    db.close()
                })
            })
        })
    },
    del:function(req,res){
        console.log('删除操作...')
        var qStr='';
        req.addListener('data',function(dataPart){
            qStr+=dataPart
        });
        req.addListener('end',function(){
            var seqorator=querystring.parse(qStr);
            // console.log(seqorator);
            MongoClient.connect(DB_STR,function(err,db){
                if(err){console.log(err);res.end();db.close();return;}
                db.collection('node').remove(seqorator,{_id:0})
                res.end('1')
                db.close()
            })
        })
    }
}
module.exports=node;