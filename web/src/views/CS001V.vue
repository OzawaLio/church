<template>
  <div class="m_container">
    <h1 class="tcBlack"> 교회학교 </h1>
    <select v-model="selectedVal" class="selComponents">
      <option v-for="list in menuList" :key="list.value" :value="list.value">{{list.text}}</option>
    </select>
    <component :is="selectedVal"></component>
  </div>
</template>

<script>
import SH001C01 from '@/components/school/SH001C01.vue'
import SH001C02 from '@/components/school/SH001C02.vue'
import SH001C03 from '@/components/school/SH001C03.vue'
import SH001C04 from '@/components/school/SH001C04.vue'

export default {
  data(){
    return {
      selectedVal : "SH001C01",
      menuList : [
        {text: '유치부', value: 'SH001C01'}
        ,{text: '초등부', value: 'SH001C02'}
        ,{text: '중고등부', value: 'SH001C03'}
        ,{text: '청년부', value: 'SH001C04'}
      ]
    }
  }
  ,components : {
    SH001C01
    ,SH001C02
    ,SH001C03
    ,SH001C04
  }
}
</script>