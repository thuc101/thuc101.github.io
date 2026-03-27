<template>
  <div>
    <h1>This is TestMyLib page</h1>
    {{ ds }}
    <hr>
  </div>
</template>
<script>
import MyLib from '@/MyLib';
var lib={
  ten:"thuc 101",
  sayHello(){
    alert(this.ten);
  }
}
export default {
  name: 'ChangePass',
  data(){
    return{
      ds:[]
    }
  },
  mounted(){
    this.ds=MyLib.lds();
    let a=lib;
    a.sayHello();
  },
  methods:{
  }
}
</script>
