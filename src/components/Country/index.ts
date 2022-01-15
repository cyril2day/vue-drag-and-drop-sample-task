import { HandleDrop, OnDropReturn, StartDrag } from "./types"


export const startDrag: StartDrag = (event, payload) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('cityId', payload.id.toString())
  } else {
    console.error('action is not possible')
  }
}

export const handleDrop: HandleDrop = (event, countryId) => {
  const result: OnDropReturn = { cityId: 0, receivingEntity: 0 }
  const cityId = event.dataTransfer?.getData('cityId')
  if (cityId) {
    [ result.cityId, result.receivingEntity ] = [ parseInt(cityId), countryId ]
  }
  return result
}
