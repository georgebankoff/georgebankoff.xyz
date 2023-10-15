import React from 'react';
import { useState } from 'react'
import './App.css';

export function HomePage() {
  const [count, setCount] = useState(0)

    return (
      <div className="App">
        {/* <img src="/vite-deno.svg" alt="Vite with Deno" />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1 className = "header">
          <span className="clip">
            George Bankoff
          </span>
        </h1>
        <div>
        <p>
          I made this website using React to post photos that I took on a trip to Maine with Babak Tafreshi.
        </p>
        </div>
        <div className = "spaced">
          {/* <img src="/Wanderer.webp" className = "wanderer"/> */}
          <img src="/dipper-trail.webp" className='wanderer'></img> 
          <img src="/moon.JPG" className='wanderer'></img>
          <img src="/moon-trail.jpg" className='wanderer'></img>
        </div>
  {/* how to make this count global for every user?? */}
       {/*  <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div> */}
        {/* <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </div>
    )
}

export default HomePage
