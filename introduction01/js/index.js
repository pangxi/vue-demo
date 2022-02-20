window.onload = function () {
    new Vue({
        el:"#my",   // element元素  挂载元素
        data:{  // 响应式的数据
            name:'abc',
            n:2,  // 初始化，默认值
            title:['标题1','标题2','标题3'],
            content:['内容1','内容2','内容3'],
            obj:[
                {title:'标题1',content:'内容1'},
                {title:'标题2',content:'内容2'},
                {title:'标题3',content:'内容3'},
                {title:'标题4',content:'内容4'},
            ]
        },
        methods:{  // 管理各种方法（函数）
            action(i) {
                this.n = i
            },
            getData:function () {
                axios({
                    method:'get',
                    url:'http://127.0.0.1:3000/get_tab'
                }).then(function (res) {
                    console.log(res)
                }).catch(function (error) {
                    
                })
            },
            mounted:function () {
                this.getData()
            }
        }
    })
}
