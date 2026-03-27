<template>
    <div>
        <h1>This is header</h1>
        <!-- <div>{{ menu }}</div>
        { "id": 2, "label": "Môn Toán", "path": "/", "auth": 9 }, { "id": 3, "label": "Môn Lý", "path": "/Ly", "auth": 9 }, { "id": 4, "label": "Môn Hóa", "path": "/Hoa", "auth": 9 } ]         -->
        <div style="margin-bottom: 6px;">
            <span v-for="(x,i) in menu" :key="i">
                <RouterLink :to="getItem(arLink, x.id)" style="margin: 3px;" >{{ x.label }}</RouterLink> |
            </span>
        </div>
        <router-view></router-view>
        <div>This is Footer</div>
    </div>
</template>
<script>
import $ from "jquery";
import hideMixin from "@/hideMixin";
import menuMixin from "@/menuMixin";
import { RouterLink } from "vue-router";
export default {
    name: 'HomeView',
    mixins: [hideMixin,menuMixin],
    data(){
        return{
            menu:[],
            arLink:[]
        }
    },
    components: {
    },
    mounted() {
        this.menu=this.getMenu("/");
        this.arLink=this.getListLink();
    },
}
</script>
