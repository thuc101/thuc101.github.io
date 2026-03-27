<template>
  <div id="app" class="content">
    <router-view :key="$route.fullPath" /> 
  </div>
</template>
<script>
export default {
  name: 'Appvue',
  components: {
  },
  mounted() {
  }
}
</script>
<style lang="scss">

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*/
.navbar-nav {
  li a {
    font-weight: bold;
    color: blue;

    &.router-link-exact-active {
      color: red !important;
      background-color: yellow;
    }
    &:hover {
        background-color: gray;
    } 

  }
}

.content {
  margin-bottom: 100px;
}
.navbar
{
    border-bottom:2px solid #000;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  right: 1px;
  padding: 5px;
  border-top: 1px solid gray;
  background-color: silver;
  z-index: 999;
  height: 30px;
}

.vertical-menu {
  width: 100%; /* Set a width if you like */
}
.vertical-menu a {
  background-color: #eee; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding:4px 10px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}
.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}
.vertical-menu a.router-link-exact-active {
  background-color: #04AA6D; /* Add a green color to the "active/current" link */
  color: white;
}
.vertical-menu a.active {
  background-color: #04AA6D; /* Add a green color to the "active/current" link */
  color: white;
}

$font-size-base:0.55rem;
$font-family-sans-serif:  Verdana,Avenir,"Courier New","Times New Roman",Tahoma,arial,Monaco,sans-serif;
$font-family-serif:       Georgia, "Times New Roman", Times, serif !default;
$font-family-monospace:   Menlo, Monaco, Consolas, "Courier New", monospace !default;
$font-family-base:        $font-family-sans-serif !default;

// Then import Bootstrap and BootstrapVue SCSS files (order is important)
@import 'node_modules/bootstrap/scss/bootstrap.scss';
//@import 'node_modules/bootstrap-vue/src/index.scss';

</style>