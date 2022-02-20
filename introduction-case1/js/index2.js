window.onload = function () {
    new Vue({
        el:'#my',
        data:{
            n:1,
            items:[
                {name:'衣服',icon:'icon-yonghu',
                    subItems:[
                        {name:'衣服1'},
                        {name:'衣服2'},
                        {name:'衣服3'}
                    ]
                },
                {name:'包包',icon:'icon-licai',
                    subItems:[
                        {name:'包包1'},
                        {name:'包包2'},
                        {name:'包包3'}
                    ]
                },
                {name:'鞋子',icon:'icon-jia',
                    subItems:[
                        {name:'鞋子1'},
                        {name:'鞋子2'},
                        {name:'鞋子3'}
                    ]
                }
            ]
        },
        methods:{

        }
    })
}