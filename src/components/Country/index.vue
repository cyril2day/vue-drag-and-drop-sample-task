<script setup lang='ts'>
import { PropType, ref } from "vue";
import { Country, City } from "./types";
import { startDrag, handleDrop } from './index'
import { Cities } from "./data";


const props = defineProps({
  country: {
    required: true,
    type: Object as PropType<Country>,
  }
})

const emit = defineEmits(['found'])

const cities = ref<City[]>([])

const onDrop = (event: any) => {
  const result = handleDrop(event, props.country.id)
  const isFound = props.country.cities.includes(result.cityId)

  if (isFound) {
    const city = Cities.find(city => city.id === result.cityId)
    if (
      city &&
      !(cities.value.includes(city))
    ) {
      cities.value.push(city)
      emit('found', city)
    }
  } else {
    alert(`this city does not belong to ${props.country.name}`)
  }
}
</script>

<template>
  <div
    class='city__drop-area'
    @drop='onDrop'
    @dragover.prevent
    @dragenter.prevent
  >
    <div class='city__header'>
      <h2>{{ props.country.name }}</h2>
    </div>
    <div class='city__list'>
      <div
        v-for='city in cities'
        :key='city.id'
        class='city__item'
        :draggable='true'
        @dragstart='startDrag($event, city)'
      >{{ city.name }}</div>
    </div>
  </div>
</template>

<style lang='scss'>
.city__drop-area {
  flex: 0 0 295px;
  margin: 10px;
  height: 370px;
  border-radius: 5px;
  background: ghostwhite;
  box-shadow: 0 0 40px #ccc;

}

.city__header {
  padding: 0 20px;
  text-align: left;
}

.city__item {
  margin: 10px;
  padding: 10px;
  border: 1px solid; 
  border-radius: 20px 20px;
  background: #fff;
}
</style>
