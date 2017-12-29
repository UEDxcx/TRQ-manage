<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

.ivu-row-flex{
  height: 100%;
}
.ivu-menu {
  height: 100%;
}
/* menu样式 */
.ivu-menu-dark {
   background: #323232!important;
   padding-top: 15px;
   box-sizing: border-box;
   height: 100%;
}
.ivu-menu-submenu,.ivu-menu {
  background: #3F3F3F!important
}

.ivu-menu-vertical{
  background: #323232!important
}
.ivu-menu-submenu-title{
  background: #323232!important
}
.ivu-row-flex{
  height: 100%;
}

</style>
