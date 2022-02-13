<template>
  <div class="m_container">
    <h1 class="tcBlack"> 교회안내 </h1>
    <select v-model="selectedVal" class="selComponents">
      <option v-for="list in menuList" :key="list.value" :value="list.value">{{list.text}}</option>
    </select>
    <component :is="selectedVal"></component>
  </div>
</template>

<script>
import AC001C01 from '@/components/about/AC001C01.vue'
import AC001C02 from '@/components/about/AC001C02.vue'
import AC001C03 from '@/components/about/AC001C03.vue'
import AC001C04 from '@/components/about/AC001C04.vue'
import AC001C05 from '@/components/about/AC001C05.vue'


export default {
  data(){
    return {
      selectedVal : "AC001C01",
      menuList : [
        {text: '담임목사소개', value: 'AC001C01'}
        ,{text: '교회비전', value: 'AC001C02'}
        ,{text: '사역자안내', value: 'AC001C03'}
        ,{text: '교회연혁', value: 'AC001C04'}
        ,{text: '찾아오시는길', value: 'AC001C05'}
      ]
    }
  }
  ,components : {
    AC001C01
    ,AC001C02
    ,AC001C03
    ,AC001C04
    ,AC001C05
  }
}
</script>