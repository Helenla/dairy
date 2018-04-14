var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var DB_STR="mongodb://localhost:27017/minidairy";
var other={
    getJoke: function(req, res) {
        MongoClient.connect(DB_STR,function(err,db){
            if(err){console.log(err);res.end(err);db.close();return;}
            db.collection('joke').find({}).toArray(function(err,result){
                console.log(result)
                res.write(JSON.stringify({
                    data:result
                }))
                res.end();
                db.close()
            })
        })
    },
    getNews: function(req, res) {
        MongoClient.connect(DB_STR,function(err,db){
            if(err){console.log(err);res.end(err);db.close();return;}
            db.collection('news').find({}).toArray(function(err,result){
                console.log(result)
                res.write(JSON.stringify({
                    data:result
                }))
                res.end();
                db.close()
            })
        })
    },
    getBook: function(req, res) {
        MongoClient.connect(DB_STR,function(err,db){
            if(err){console.log(err);res.end(err);db.close();return;}
            db.collection('book').find({}).toArray(function(err,result){
                console.log(result)
                res.write(JSON.stringify({
                    data:result
                }))
                res.end();
                db.close()
            })
        })
    },
    getCommon: function(req, res) {
        MongoClient.connect(DB_STR,function(err,db){
            if(err){console.log(err);res.end(err);db.close();return;}
            db.collection('common').find({}).toArray(function(err,result){
                console.log(result)
                res.write(JSON.stringify({
                    data:result
                }))
                res.end();
                db.close()
            })
        })
    }
}
module.exports=other;