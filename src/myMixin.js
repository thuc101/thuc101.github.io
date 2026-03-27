export default{    
    data() {
        return {
            ds:[
                {id:1,ten:'thuc 101'},
                {id:2,ten:'thuc 102'}
            ]
        };
    },
    created: function () {
    },
    methods: {
        lds(){
            return this.ds;
        }
    }
};