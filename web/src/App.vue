<template>
  <Nav />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Nav from "@/components/SH001C01.vue";
import Footer from "@/components/SH002C01.vue";

export default {
  components: {
    Nav
    ,Footer
  }  
}
</script>

<style>
@import './static/SH001S01.css';

.m_container {
  text-align: center;
  border: 1px solid palevioletred;
  margin-top: 1em;
  margin-left : 3em;
  margin-right: 3em;
  margin-bottom: 1em;
}

.b_container {
  text-align: center;
  border: 1px dashed darkcyan;
  margin-top: 1em;
  margin-left: 3em;
  margin-right: 3em;
  margin-bottom: 1em;
}
</style>
