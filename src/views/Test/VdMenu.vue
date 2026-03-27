<template>
    <div class="VdMenu">
        <h1>This is VdMenu page</h1>
        <div>{{ menus }}</div>
    </div>
</template>
<script>
export default {
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            routes: [],
            menus: [],
            level: 9
        }
    },
    mounted() {
        // let path="/MonHoc";
        // let ds=this.getMenu();
        // ds.forEach(x => {
        //     console.log(JSON.stringify(x));
        // })
        // let index=ds.findIndex(x=>x.path==path);
        // console.log(ds[index].children);
    },
    methods: {

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
                    kq.push({ id: layra.id, label: layra.label, path: layra.path, auth: layra.auth });
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
        getMenu() {
            let routes = JSON.parse(JSON.stringify(this.$store.state.routes));
            let ar = JSON.parse(JSON.stringify(routes[0].children));
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
            // ar2.forEach(x=>{
            //   console.log(JSON.stringify(x));
            // })
            return ar2;
        },
        getMenuByLevel(level) {
            let routes = JSON.parse(JSON.stringify(this.$store.state.routes));
            let ar = JSON.parse(JSON.stringify(routes[0].children));
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
}
</script>

