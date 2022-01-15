export type City = {
  id: number
  name: string
}

export type Country = {
  id: number
  name: string
  slug?: string
  cities: number[]
}

type OnDropReturn = {
  cityId: number
  receivingEntity: number
}

export type StartDrag = (event: DragEvent, city: City) => void

export type HandleDrop = (event: DragEvent, countryId: number) => OnDropReturn

export type HandleFound = (city: City) => void
