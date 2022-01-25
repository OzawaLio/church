<template>
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav
  }  
}
</script>

<style>
.b_container{
  text-align: center;
  border: 1px dashed darkcyan;
}

</style>
