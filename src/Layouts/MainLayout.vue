<template>
    <div>
        <div class="container p-1" style="margin-bottom:0; background-color: gainsboro">
            <h1>Bs 4 Template</h1>
            <p>Resize this responsive page to see the effect!</p>
            <div>$route.fullPath : {{ $route.fullPath }}</div>
            <!-- <div>{{ menus }}</div> -->
             <!-- <ul>
                <li v-for="(x,i) in menus" :key="i">{{ x }}</li>
             </ul> -->
        </div>


        <!-- <nav class="container navbar navbar-expand-sm navbar-dark bg-dark"> -->
        <nav class="container navbar navbar-expand-sm navbar-light bg-primay">
            <a class="navbar-brand" href="#">Rocket</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav mr-auto">
                    <template v-for="x in menus">
                        <template v-if="x.children == undefined">
                            <li class="nav-item" :key="x.id">
                                <router-link :to="x.path" class="nav-link">{{ x.label }}</router-link>
                            </li>
                        </template>
                        <template v-if="x.children != undefined">
                            <li class="nav-item dropdown" :key="x.id">
                                <a class="nav-link dropdown-toggle" href="#" :id="x.id" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">{{ x.label }}</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown03">
                                    <router-link v-for="y in x.children" :key="y.id" :to="y.path"
                                        class="dropdown-item">{{ y.label }}</router-link>
                                </div>
                            </li>
                        </template>
                    </template>
                </ul>
                <span class="navbar-text mr-1">
                    Thức 101, Admin
                </span>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/ChangePass" class="nav-link">Change pass</router-link>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="onLogout">Logout</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown03"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Setting</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown03">
                            <router-link to="/ChangePass" class="dropdown-item">Change pass</router-link>
                            <a class="dropdown-item" href="#" @click.prevent="onLogout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container" style="margin-top:30px">
            <router-view></router-view>
        </div>
        <div class="footer" style="margin-bottom:0">
            <p>Footer</p>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import menuMixin from "@/menuMixin"
export default {
    name: 'Appvue',
    mixins:[menuMixin],
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
        this.$nextTick(() => {
            $('.navbar-nav li a').on('click', function () {
                if (!$(this).hasClass('dropdown-toggle')) {
                    $('.navbar-collapse').collapse('hide');
                }
            });
        })
        //this.menus = this.getMenu();
        this.menus=this.getMenuByLevel(this.level);
    },
    methods: {
        onLogout() {
            this.$router.push("/Login");
        },
    }


}
</script>


