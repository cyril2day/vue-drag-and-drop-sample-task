import { City, Country } from "./types"

export const Countries: Country[] = [
  {
    id: 1,
    name: 'USA',
    slug: 'usa',
    cities: [7, 8, 9, 10],
  },
  {
    id: 2,
    name: 'India',
    slug: 'india',
    cities: [1, 2, 3],
  },
  {
    id: 3,
    name: 'Philippines',
    slug: 'philippines',
    cities: [4, 5, 6],
  }
]

export const Cities: City[] = [
    // India
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Delhi' },
    { id: 3, name: 'Bangalore' },
    // Philippines
    { id: 4, name: 'Manila' },
    { id: 5, name: 'Davao' },
    { id: 6, name: 'Cebu' },
    // USA
    { id: 7, name: 'New York' },
    { id: 8, name: 'Chicago' },
    { id: 9, name: 'Miami' },
    { id: 10, name: 'Los Angeles' },
]
