'use client'
import React from 'react'
import Humans from './components/humans/humans.jsx'
import Films from './components/Films/films.jsx'
import Planets from './components/Planets/planets.jsx'
export default function Home() {
  return (
  <div className="min-h-0 flex flex-col items-center justify-center py-2">
    <h1 className="text-3xl font-bold underline">
    Welcome to the Home Page
    </h1>
    <nav>
      <ul>
        <li className="font-bold "><a href="/films" >Films</a></li>
        <li className="font-bold"><a href="/planets">Planets</a></li>
        <li className="font-bold"><a href="/humans">Humans</a></li>
      </ul>
    </nav>
    
  </div>
  
  )
}
