<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';
import { Cities, Countries } from './Country/data';
import CountryComponent from './Country/index.vue'
import { City, HandleFound } from './Country/types';
import { startDrag } from './Country/index'

const cityList = ref<City[]>([])

const handleFound: HandleFound = (city) => {
  const toDelete = cityList.value.indexOf(city)
  cityList.value.splice(toDelete, 1)
}

onBeforeMount(() => {
  cityList.value = Cities
})
</script>

<template>
  <div class='wrapper'>
    <div class='wrapper__countries'>
      <country-component
        v-for='country in Countries'
        :key='country.id'
        :country='country'
        @found='handleFound'
      />
    </div>
    <div class='wrapper__cities'>
      <div class='cities__header'>
        <h2>Cities</h2>
      </div>
      <div 
        class='cities__list'
      >
        <div
          v-for='city in cityList'
          :key='city.id'
          class='cities__item'
          :draggable='true'
          @dragstart='startDrag($event, city)'
        >{{ city.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.wrapper {
  height: 800px;
  width: 1200px;
  display: flex;
  margin: 0 auto;
}

.wrapper__countries {
  flex-grow: 10;
  display: flex;
  border: 1px solid;
  margin-right: 20px;
  background: whitesmoke;
}

.wrapper__cities {
  flex-grow: 2;
  background: whitesmoke;
  border: 1px solid #000;
}

.city__drop-area {
  flex: 0 0 295px;
}

.cities__item {
  background: #f9dad5;
  margin: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
}
</style>
