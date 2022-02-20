

app.post('/submit_message',function (req,res,next) {
    console.log(req.body,req.query,req.params);
    for (let k in req.body) {
        map.set(k,res.body[k])
    };
    var data = {
        "code":"200",
        "msg":"success"
    }
    res.end(JSON.stringify(data))
    next()
})
app.get('/get_tab',function (req,res,next) {
    var data = {
        "code":"200",
        "msg":"success",
        "result":[
            {"title":"关注","content":"记得关注哟"},
            {"title":"视频","content":"有什么新资讯"},
            {"title":"推荐","content":"这个不错哟"},
            {"title":"好友","content":"认识一下咯"},
            {"title":"小说","content":"别看了学习吧"},
            {"title":"游戏","content":"最后一把"},
        ]
    }
    res.end(JSON.stringify(data))
    next()
})

app.listen(3000,function () {
    console.log("Server started on port 3000.")
})