<template>
    <div>
        <div class="row">
            <div class="col-sm-2" id='left'>
                <h2>{{ title }}</h2>
                <div class="vertical-menu">
                    <router-link v-for="x in children" :key="x.id" :to=" x.path " >{{ x.label }}</router-link>
                </div>
            </div>
            <div class="col-sm-10">
                <router-view></router-view>
                <hello-world msg="hi hi hi"></hello-world>
            </div>
        </div>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

import $ from "jquery";
import hideMixin from "@/hideMixin";
import menuMixin from "@/menuMixin";
export default {
    name: 'HomeView',
    mixins: [hideMixin,menuMixin],
    data(){
        return{
            title:'',
            children:[],
            menus:[]
        }
    },
    components: {
        HelloWorld
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
        this.menus=menus;
        let ar=this.$route.fullPath.split("/");
        let path=`/${ar[1]}/${ar[2]}`;
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
