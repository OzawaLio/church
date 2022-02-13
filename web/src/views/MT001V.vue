<template>
  <div class="m_container">
    <h1 class="tcBlack"> 교제 </h1>
    <select v-model="selectedVal" class="selComponents">
      <option v-for="list in menuList" :key="list.value" :value="list.value">{{list.text}}</option>
    </select>
    <component :is="selectedVal"></component>
  </div>
</template>

<script>
import MT001C01 from '@/components/meeting/MT001C01.vue'
import MT001C02 from '@/components/meeting/MT001C02.vue'
import MT001C03 from '@/components/meeting/MT001C03.vue'
import MT001C04 from '@/components/meeting/MT001C04.vue'
import MT001C05 from '@/components/meeting/MT001C05.vue'
import MT001C06 from '@/components/meeting/MT001C06.vue'

export default {
  data(){
    return {
      selectedVal : "MT001C01",
      menuList : [
        {text: '남전도회', value: 'MT001C01'}
        ,{text: '여전도회', value: 'MT001C02'}
        ,{text: '권사회', value: 'MT001C03'}
        ,{text: '호산나찬양대', value: 'MT001C04'}
        ,{text: '로뎀찬양단', value: 'MT001C05'}
        ,{text: '새샘오케스트라', value: 'MT001C06'}
      ]
    }
  }
  ,components : {
    MT001C01
    ,MT001C02
    ,MT001C03
    ,MT001C04
    ,MT001C05
    ,MT001C06
  }
}
</script>
