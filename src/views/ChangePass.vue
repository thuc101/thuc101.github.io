<template>
  <div class="container mt-2" style="text-align:right">
    <h4>Change your pass</h4>
    old pass : <input style="margin-bottom:1px" /><br>
    new pass : <input style="margin-bottom:1px" /><br>
    <button style="margin-bottom:1px" @click="onChange" >Change</button>
  </div>
</template>
<script>
export default {
  name: 'ChangePass',
  methods:{
    onChange(){
      this.$router.push("/");
    }
  }
}
</script>
