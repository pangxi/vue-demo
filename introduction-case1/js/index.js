window.onload = function () {
    new Vue({
        el:'#my',
        data:{
            items:[
                {name:'衣服',icon:'icon-yonghu',flag:true,
                    subItems:[
                        {name:'衣服1'},
                        {name:'衣服2'},
                        {name:'衣服3'}
                    ]
                },
                {name:'包包',icon:'icon-licai',flag:false,
                    subItems:[
                        {name:'包包1'},
                        {name:'包包2'},
                        {name:'包包3'}
                    ]
                },
                {name:'鞋子',icon:'icon-jia',flag:false,
                    subItems:[
                        {name:'鞋子1'},
                        {name:'鞋子2'},
                        {name:'鞋子3'}
                    ]
                }
            ]
        },
        methods:{
            changeFlag:function (v) {
                // v.flag = !v.flag
                this.items.forEach(item => {item.flag =false})
                v.flag = true
            }

        }
    })
}