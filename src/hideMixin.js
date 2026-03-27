import $ from "jquery";
export default{    
    data() {
        return {
        };
    },
    created: function () {
        this.SayHello();
    },
    methods: {
        SayHello(){
            console.log(`hello world from hideMixin`);
        },
        HideLeft() {
            if ($(window).width() < 767) {
                $("#left").hide();
            } else {
                $("#left").show();
            }
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