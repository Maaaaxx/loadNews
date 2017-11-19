app.get('/loadMore',function(req,res){
    
        var curIndex = req.query.index
        var len = req.query.length
        var news = []
    
        for(var i =0;i < len;i++){
            news.push('新闻' + (parseInt(curIndex) + i))
        }
    
        res.send({
            status: 0,
            data: news
        })
    })
