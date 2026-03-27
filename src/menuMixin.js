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
        console.log("I from menuMixin.js")
    },
    methods: {
        lds(){
            return this.ds;
        },
        getListLink() {
            let s = [];
            let kq = [];
            //let routes = JSON.parse(JSON.stringify(this.routes));
            let routes = JSON.parse(JSON.stringify(this.$store.state.routes));
            routes.forEach(x => {
                if (x.path != "*") {
                    s.push(x);
                }
            })
            while (s.length != 0) {
                let layra = s.pop();
                //console.log(layra);
                if (layra.children == undefined) {
                    kq.push(layra);
                } else {
                    kq.push({ id: layra.id, label: layra.label, path:layra.path, auth: layra.auth });
                }
                let path = layra.path
                if (layra.children != undefined) {
                    layra.children.forEach(y => {
                        if (y.path != "" && path != "/") {
                            y.path = path + "/" + y.path;
                        } else {
                            y.path = path + y.path;
                        }
                        s.push(y);
                    })
                }
            }
            return kq;
        },
        getItem(arLink, id) {
            let index = arLink.findIndex(x => x.id == id);
            if (index < 0) console.log(`khong tim thay id : ${id}`);
            let kq = arLink[index];
            //kq.label+=kq.auth;
            return kq;
        },
        getMenu(path="/Admin") {
            let routes = JSON.parse(JSON.stringify(this.$store.state.routes));
            let index=routes.findIndex(x=>x.path==path);
            let ar = JSON.parse(JSON.stringify(routes[index].children));
            let arLink = this.getListLink();
            let ar2 = [];
            ar.forEach(x => {
                if (x.children == undefined) {
                    let item = this.getItem(arLink, x.id);
                    ar2.push(item);
                } else {
                    let item2 = this.getItem(arLink, x.id);
                    let children = [];
                    x.children.forEach(y => {
                        let item = this.getItem(arLink, y.id);
                        children.push(item);
                    })
                    item2.children = children;
                    ar2.push(item2);
                }
            })
            return ar2;
        },
        getMenuByLevel(level) {
            let routes = JSON.parse(JSON.stringify(this.$store.state.routes));
            let index=routes.findIndex(x=>x.path=="/Admin");
            let ar = JSON.parse(JSON.stringify(routes[index].children));
            let arLink = this.getListLink();
            let ar2 = [];
            ar.forEach(x => {
                if (x.children == undefined) {
                    if (level >= x.auth) {
                        let item = this.getItem(arLink, x.id);
                        ar2.push(item);
                    }
                } else {
                    if (level >= x.auth) {
                        let item2 = this.getItem(arLink, x.id);
                        let children = [];
                        x.children.forEach(y => {
                            if (level >= y.auth) {
                                let item = this.getItem(arLink, y.id);
                                children.push(item);
                            }
                        })
                        item2.children = children;
                        ar2.push(item2);
                    }
                }
            })
            // ar2.forEach(x=>{
            //   console.log(JSON.stringify(x));
            // })
            return ar2;
        }
    }
};
/*
import hideMixin from "@/hideMixin"
export default {
    name: 'HomeView',
    mixins:[hideMixin],
    components: {
    },
    mounted() {
        this.$nextTick(function () {
            this.HideLeft();
            $(window).resize(function () {
                this.HideLeft();
            })
        })
    },
    methods: {
    }
}
*/
