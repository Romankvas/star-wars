'use client'

import { useState } from 'react'
import Films from './components/Films/films'
import Planets from './components/Planets/planets'
import People from './components/People/people'

const CATEGORIES = [
  {
    id: 'films',
    icon: '✦',
    title: 'Фільми',
    description: 'Епізоди саги, режисери та дати премʼєр з SWAPI Films.',
    action: 'Відкрити фільми',
  },
  {
    id: 'planets',
    icon: '◎',
    title: 'Планети',
    description: 'Світи галактики: клімат, рельєф і населення.',
    action: 'Відкрити планети',
  },
  {
    id: 'people',
    icon: '◉',
    title: 'Люди',
    description: 'Персонажі: зріст, стать і рік народження.',
    action: 'Відкрити людей',
  },
]

export default function Home() {
  const [category, setCategory] = useState(null)

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-40px))] px-0 pb-24 pt-14 md:pt-20">
      <section className="mx-auto mb-12 max-w-[660px] text-center">
        <p className="mb-3 text-[0.73rem] font-extrabold tracking-[0.22em] text-sw-yellow">
          GALAXY ARCHIVE
        </p>
        <h1 className="m-0 text-[clamp(3rem,10vw,6.5rem)] font-black leading-[0.85] tracking-[-0.075em] text-sw-yellow [text-shadow:0_0_24px_rgba(255,232,31,0.22)]">
          STAR WARS
        </h1>
        <p className="mt-6 text-[1.08rem] text-sw-muted">
          Обери розділ — картки підтягнуться з офіційного SWAPI.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CATEGORIES.map((item) => {
          const isActive = category === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`relative flex min-h-56 flex-col items-start overflow-hidden rounded-[20px] border p-[30px] text-left text-sw-text transition duration-200 after:pointer-events-none after:absolute after:right-[-54px] after:bottom-[-76px] after:h-[150px] after:w-[150px] after:rounded-full after:border after:border-sw-yellow/20 hover:-translate-y-1 hover:border-sw-yellow hover:shadow-[0_14px_44px_rgba(0,0,0,0.35)] focus-visible:border-sw-yellow focus-visible:outline-none md:min-h-[262px] ${
                isActive
                  ? 'border-sw-yellow shadow-[0_14px_44px_rgba(0,0,0,0.35)]'
                  : 'border-sky-200/20 bg-linear-to-br from-[rgba(32,43,65,0.82)] to-[rgba(18,24,38,0.88)]'
              }`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-sw-yellow/45 text-[1.55rem] text-sw-yellow">
                {item.icon}
              </span>
              <span className="mt-9 text-[1.6rem] font-extrabold">{item.title}</span>
              <span className="mt-2 leading-snug text-sw-muted">{item.description}</span>
              <span className="mt-auto pt-5 text-sm font-extrabold text-sw-yellow">{item.action} →</span>
            </button>
          )
        })}
      </div>

      <div className="mt-16">
        {category === 'films' && <Films />}
        {category === 'planets' && <Planets />}
        {category === 'people' && <People />}
      </div>
    </main>
  )
}
