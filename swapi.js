'use client'

import { useEffect, useState } from 'react'
import DataCard from '../DataCard'
import { fetchStarWars } from '../../lib/swapi'

export default function Films() {
  const [films, setFilms] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  async function loadFilms() {
    setLoading(true)
    setError('')

    try {
      const results = await fetchStarWars('films')
      setFilms(results)
    } catch (err) {
      setFilms([])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFilms()
  }, [])

  if (loading) {
    return <p className="rounded-xl border border-sky-200/20 bg-[rgba(15,20,32,0.72)] p-7 text-center text-sw-muted">Завантажуємо фільми…</p>
  }

  if (error) {
    return (
      <div className="rounded-xl border border-sky-200/20 bg-[rgba(15,20,32,0.72)] p-7 text-center text-sw-muted">
        <p className="mb-4">{error}</p>
        <button
          type="button"
          onClick={loadFilms}
          className="cursor-pointer rounded-lg border border-sw-yellow px-4 py-2.5 text-sw-yellow"
        >
          Спробувати ще
        </button>
      </div>
    )
  }

  return (
    <section>
      <div className="mb-6 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-[0.73rem] font-extrabold tracking-[0.22em] text-sw-yellow">SWAPI / FILMS</p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3rem)]">Фільми</h2>
        </div>
        <p className="whitespace-nowrap rounded-full border border-sw-blue/35 px-3 py-2 text-sm text-sw-blue">
          {films.length} карток
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {films.map((film) => (
          <DataCard
            key={film.episode_id || film.title}
            mark="FILM"
            title={film.title}
            fields={[
              ['Режисер', film.director],
              ['Дата виходу', film.release_date],
              ['Епізод', film.episode_id],
            ]}
          />
        ))}
      </div>
    </section>
  )
}
