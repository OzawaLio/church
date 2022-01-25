<template>
  <div class="worship">
    <Info />
  </div>
</template>

<script>
import Info from "@/components/worship/Info.vue";

export default {
  name: "worship",  
  components: {
    Info
  },
  data(){
    return {
      message : "this is an about page"
    }
  }
}
</script>