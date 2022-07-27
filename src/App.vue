<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">openOFDBaseViewer</router-link>|
      <router-link to="/interface">接口渲染</router-link> |
      <router-link to="/about">openOFDViewer</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
