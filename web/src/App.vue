<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/aboutCh">교회안내</router-link></li>
      <li><router-link to="/worship">예배</router-link></li>
      <li><router-link to="/gallery">새샘갤러리</router-link></li>
      <li><router-link to="/schoolCh">교회학교</router-link></li>
      <li><router-link to="/meetings">교제</router-link></li>
      
      <li><router-link to="/samplvue">샘플</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
