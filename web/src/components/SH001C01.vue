<template>
  <div id="contents">
    <nav>
      <router-link to='/' class="item">
        <div class="linktext">Home</div>
      </router-link>
      <router-link to='/ac' class="item">
        <div class="linktext">교회안내</div>
      </router-link>
      <router-link to='/ws' class="item">
        <div class="linktext">예배</div>
      </router-link>
      <router-link to='/gl' class="item">
        <div class="linktext">새샘갤러리</div>
      </router-link>
      <router-link to='/cs' class="item">
        <div class="linktext">교회학교</div>
      </router-link>
      <router-link to='/mt' class="item">
        <div class="linktext">교제</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SH001C01'  
};
</script>

<style scoped>
#contents {
  background: #3384F2;
  text-align: center;
}
nav .linktext {
  font-size: 1.2em;
  text-align: center;
  position: relative;
  z-index: 2;
  color: #c1f5ba;
  text-decoration: none;
  font-family: "Righteous", Arial, sans-serif;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
}
nav .linktext:before {
  display: inline-block;
  content: "";
  position: absolute;
  height: 3px;
  width: 100%;
  top: 26px;
  left: 50%;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  transition-delay: 0s;
  -webkit-transition-delay: 0s;
  opacity: 1;
  background: #94f587;
  max-width: 0%;
  overflow: hidden;
}
nav .item {
  position: relative;
  display: inline-block;
  height: 35px;
  padding-top: 15px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  background: transparent;
  z-index: 2;
  text-decoration: none;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
}
nav .item:hover .linktext {
  transform: rotateY(360deg) scale(1.3);
  -webkit-transform: rotateY(360deg) scale(1.3);
  color: #94f587;
}
nav .item:hover .linktext:before {
  transition-delay: 0.3s;
  -webkit-transition-delay: 0.3s;
  max-width: 100%;
  left: 0%;
}
</style>