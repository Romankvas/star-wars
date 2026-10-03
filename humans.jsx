const ENDPOINTS = {
  films: 'films',
  planets: 'planets',
  people: 'people',
}

export async function GET(_request, { params }) {
  const { category } = await params
  const endpoint = ENDPOINTS[category]

  if (!endpoint) return Response.json({ error: 'Невідомий розділ.' }, { status: 404 })

  // Заміни STAR_WARS_API_BASE_URL у .env.local, якщо використовуєш інше API.
  const baseUrl = (process.env.STAR_WARS_API_BASE_URL || 'https://swapi.dev/api').replace(/\/$/, '')

  try {
    const response = await fetch(`${baseUrl}/${endpoint}/`, { cache: 'no-store' })
    if (!response.ok) {
      return Response.json({ error: `Зовнішнє API повернуло помилку ${response.status}.` }, { status: 502 })
    }

    const payload = await response.json()
    const results = Array.isArray(payload) ? payload : payload.results || payload.data || []
    return Response.json({ results })
  } catch {
    return Response.json({ error: 'Не вдалося підключитися до зовнішнього Star Wars API.' }, { status: 502 })
  }
}
