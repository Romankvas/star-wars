'use client'

import { useState } from 'react'

const CATEGORIES = [
  { key: 'films', icon: '◉', title: 'Фільми', description: 'Епізоди, режисери та дати прем’єр' },
  { key: 'planets', icon: '◌', title: 'Планети', description: 'Світи далекої-далекої галактики' },
  { key: 'people', icon: '✦', title: 'Люди', description: 'Герої, джедаї та мешканці галактики' },
]

const CARD_FIELDS = {
  films: [['Режисер', 'director'], ['Дата виходу', 'release_date'], ['Епізод', 'episode_id']],
  planets: [['Клімат', 'climate'], ['Рельєф', 'terrain'], ['Населення', 'population']],
  people: [['Зріст', 'height'], ['Стать', 'gender'], ['Рік народження', 'birth_year']],
}

function getItemName(item, category) {
  return category === 'films' ? item.title : item.name
}

function formatValue(value) {
  return !value || value === 'unknown' || value === 'n/a' ? 'Невідомо' : value
}


    try {
      const response = await fetch(`/api/star-wars/${category}`, { cache: 'no-store' })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Не вдалося отримати дані.')
      setItems(Array.isArray(data.results) ? data.results : [])
      setStatus('success')
    } catch (requestError) {
      setItems([])
      setError(requestError.message || 'Не вдалося отримати дані.')
      setStatus('error')
    }
  }

  const selected = CATEGORIES.find((category) => category.key === activeCategory)

  return (
    <main className="star-wars-app">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">GALACTIC ARCHIVES</p>
        <h1 id="page-title">STAR WARS</h1>
        <p className="hero-copy">Обери розділ .</p>
      </section>

      <section className="category-grid" aria-label="Розділи каталогу">
        {CATEGORIES.map((category) => (
          <button className={`category-card ${}>
            <span className="category-icon" aria-hidden="true">{category.icon}</span>
            <span className="category-title">{category.title}</span>
            <span className="category-description">{category.description}</span>
            <span className="category-action">Відкрити <span aria-hidden="true">→</span></span>
          </button>
        ))}
      </section>

      {selected && (
        <section className="results" aria-live="polite" aria-labelledby="results-title">
          <div className="results-heading">
          
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  )
}
