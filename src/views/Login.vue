<template>
  <div class="container mt-2" style="text-align:right">
    <h4>Login please</h4>
    user name : <input style="margin-bottom:1px" /><br>
    pass : <input style="margin-bottom:1px" /><br>
    <button style="margin-bottom:1px" @click="onLogin()" >Login</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods:{
    onLogin(){
      this.$router.push("/");
    }
  }
}
</script>
