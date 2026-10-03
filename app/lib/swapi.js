export const SWAPI_BASE_URL = 'https://swapi.dev/api'

export const SWAPI_ENDPOINTS = {
  films: `${SWAPI_BASE_URL}/films/`,
  planets: `${SWAPI_BASE_URL}/planets/`,
  people: `${SWAPI_BASE_URL}/people/`,
}

export function formatValue(value) {
  return !value || value === 'unknown' || value === 'n/a' ? 'Невідомо' : value
}


export async function fetchStarWars(category) {
  const response = await fetch(`/api/star-wars/${category}`, { cache: 'no-store' })
  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload.error || 'Не вдалося завантажити дані.')
  }

  return payload.results || []
}
