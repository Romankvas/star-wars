'use client'

import { useState } from 'react'

const API_URL = 'http https://swapi.dev/api/films/1/'




const CARD_FIELDS = {
  films: [['Режисер', 'director'], ['Дата виходу', 'release_date'], ['Епізод', 'episode_id']],
  planets: [['Клімат', 'climate'], ['Рельєф', 'terrain'], ['Населення', 'population']],
  people: [['Зріст', 'height'], ['Стать', 'gender'], ['Рік народження', 'birth_year']],
}

export default function Home() {
  const [cards, setCards] = useState([])

async function getData(categoty){
  const response = await  fetch(`${API_URL}/${categoty}`)
  const data = await response.json()

  setCards(data.results)
}
function getItemName(item, category) {
  return category === 'films' ? item.title : item.name
}

function formatValue(value) {
  return !value || value === 'unknown' || value === 'n/a' ? 'Невідомо' : value
}




  return (
    <main className="star-wars-app" min-h-screen bg-gray-900 text-white p-6>
      <section className="page-title">
     
        <h1 id="page-title" className="text-center text-4xl font-bold text-yellow-300">STAR WARS</h1>
   
      </section>

      <div className="category-grid gap-4">
          <button onClick={() => getData("films")} className="rounded" bg-yellow-300 px-6 py-4 font-bold text-black>Фільми</button>
          <button onClick={() => getData("Planets")} className="rounded" bg-yellow-300 px-6 py-4 font-bold text-black>Планети</button>
          <button onClick={() => getData("Humans")} className="rounded" bg-yellow-300 px-6 py-4 font-bold text-black>Люди</button>
      </div>
<div className="results max-w-6xl mx-auto gap-4"></div>
    {cards.map((item, index) => (
      <div key={index} className="card" rounded-lg bg-gray-800>
        <h2 className="card-title"text-2xl font-bold>
        {item.gender || item.title}
          </h2>
          <p className="card-copy" text-gray-400>
          {category === 'films' && `item.title : ${item.gender}`}
           {category === 'planets' && `item.title : ${item.director}`}
           {category === 'Humans' && `item.title : ${item.climate}`}
          </p>
      </div>
    ))}
    </main>
  )
}
  
