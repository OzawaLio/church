<template>
  <div class="m_container">
    <h1 class="tcBlack"> 새샘갤러리 </h1>
    <select v-model="selectedVal" class="selComponents">
      <option v-for="list in menuList" :key="list.value" :value="list.value">{{list.text}}</option>
    </select>
    <component :is="selectedVal"></component>
  </div>
</template>

<script>
import GL001C01 from '@/components/gallery/GL001C01.vue'
import GL001C02 from '@/components/gallery/GL001C02.vue'
import GL001C03 from '@/components/gallery/GL001C03.vue'
import GL001C04 from '@/components/gallery/GL001C04.vue'
import GL001C05 from '@/components/gallery/GL001C05.vue'


export default {
  data(){
    return {
      selectedVal : "GL001C01",
      menuList : [
        {text: '새가족', value: 'GL001C01'}
        ,{text: '교회행사', value: 'GL001C02'}
        ,{text: '교육부', value: 'GL001C03'}
        ,{text: '선교부', value: 'GL001C04'}
        ,{text: '동아리', value: 'GL001C05'}
      ]
    }
  }
  ,components : {
    GL001C01
    ,GL001C02
    ,GL001C03
    ,GL001C04
    ,GL001C05
  }
}
</script>
