<template>
  <div class="m_container">
    <div class="worship">
      <Info />
    </div>

    <div v-for="group in groups" :key="group" id="worshipList" class="mt20 ml20">
      <a @click="group.open = !group.open" v-text="worshipTitle(group)"></a>
      <ul v-show="group.open">
        <li><a href="https://youtu.be/_mV0jFX8v1s">유튜브 링크</a></li>
        <li v-text="group.bulletin"></li>
        <li v-text="group.advertisement"></li>
      </ul>
    </div>
  </div>
</template> 

<script>
import Info from "@/components/worship/WS001C01.vue";

export default {
  name: "worship",
  components: {
    Info,
  },
  data() {
    return {
      message: "this is an about page",
      groups: [
        {
          date: "2022.01.30",
          title: "2부예배",
          open: false,
          link: "https://youtu.be/_mV0jFX8v1s",
          bulletin: "주보내용",
          advertisement: "재정헌금 입금계좌 / 하나 871-910004-42504 / 건축헌금 입금계좌 / 농협 301-0826-0691-01"
        },
        {
          date: "2022.01.23",
          title: "2부예배",
          open: false,
          link: "https://youtu.be/_mV0jFX8v1s",
          bulletin: "주보내용",
          advertisement: "재정헌금 입금계좌 / 하나 871-910004-42504 / 건축헌금 입금계좌 / 농협 301-0826-0691-01"
        },
        {
          date: "2022.01.16",
          title: "2부예배",
          open: false,
          link: "https://youtu.be/_mV0jFX8v1s",
          bulletin: "주보내용",
          advertisement: "재정헌금 입금계좌 / 하나 871-910004-42504 / 건축헌금 입금계좌 / 농협 301-0826-0691-01"
        },
        {
          date: "2022.01.09",
          title: "2부예배",
          open: false,
          link: "https://youtu.be/_mV0jFX8v1s",
          bulletin: "주보내용",
          advertisement: "재정헌금 입금계좌 / 하나 871-910004-42504 / 건축헌금 입금계좌 / 농협 301-0826-0691-01"
        },
        {
          date: "2022.01.02",
          title: "2부예배",
          open: false,
          link: "https://youtu.be/_mV0jFX8v1s",
          bulletin: "주보내용",
          advertisement: "재정헌금 입금계좌 / 하나 871-910004-42504 / 건축헌금 입금계좌 / 농협 301-0826-0691-01"
        },
      ],
    };
  },
  methods  : {
    worshipTitle : function(group) {
      return group.date + " " + group.title;
    }
  }
};
</script>

<style scoped>
</style>