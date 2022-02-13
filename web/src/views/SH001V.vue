<template>
  <div class="m_container">
    <p>{{ message }}</p>
    <Info />
  </div>
</template>

<script>
import Info from "@/components/worship/WS001C01.vue";

export default {
  components: {
    Info,
  },
  data(){
    return{
      message : "Main page"
    }
  }
};
</script>
