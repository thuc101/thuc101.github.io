<template>
    <div>
        <div class="row">
            <div class="col-sm-2" id='left'>
                <h2>{{ title }}</h2>
                <!-- <div>{{ $route.fullPath.split("/")[1] }}</div> -->
                <!-- <div>{{ children }}</div> -->
                <div class="vertical-menu">
                    <router-link v-for="x in children" :key="x.id" :to=" x.path " >{{ x.label }}</router-link>
                </div>
                <!-- <hr class="d-sm-none"> -->
            </div>
            <div class="col-sm-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import hideMixin from "@/hideMixin";
import menuMixin from "@/menuMixin";
export default {
    name: 'HomeView',
    mixins: [hideMixin,menuMixin],
    data(){
        return{
            title:'',
            children:[]
        }
    },
    components: {
    },
    mounted() {
        let that=this;
        this.$nextTick(function () {
            that.HideLeft();
            $(window).resize(function(){
                that.HideLeft();
            })
        })
        let menus=this.getMenu();
        let ar=this.$route.fullPath.split("/");
        let path=`/${ar[1]}`;
        let index=menus.findIndex(x=>x.path==path);
        if( index < 0 ) console.log("khong tim thay");
        else {
            this.title=menus[index].label;
            let children=menus[index].children;
            this.children=children;
        }

    },
}
</script>
