'use client'

import { useEffect, useState } from 'react'
import DataCard from '../DataCard'
import { fetchStarWars } from '../../lib/swapi'

export default function People() {
  const [people, setPeople] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  async function loadPeople() {
    setLoading(true)
    setError('')

    try {
      const results = await fetchStarWars('people')
      setPeople(results)
    } catch (err) {
      setPeople([])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPeople()
  }, [])

  if (loading) {
    return <p className="rounded-xl border border-sky-200/20 bg-[rgba(15,20,32,0.72)] p-7 text-center text-sw-muted">Завантажуємо персонажів…</p>
  }

  if (error) {
    return (
      <div className="rounded-xl border border-sky-200/20 bg-[rgba(15,20,32,0.72)] p-7 text-center text-sw-muted">
        <p className="mb-4">{error}</p>
        <button
          type="button"
          onClick={loadPeople}
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
          <p className="mb-2 text-[0.73rem] font-extrabold tracking-[0.22em] text-sw-yellow">SWAPI / PEOPLE</p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3rem)]">Люди</h2>
        </div>
        <p className="whitespace-nowrap rounded-full border border-sw-blue/35 px-3 py-2 text-sm text-sw-blue">
          {people.length} карток
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {people.map((person) => (
          <DataCard
            key={person.name}
            mark="PERSON"
            title={person.name}
            fields={[
              ['Зріст', person.height],
              ['Стать', person.gender],
              ['Рік народження', person.birth_year],
            ]}
          />
        ))}
      </div>
    </section>
  )
}
