import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React created</h1>
      <h2>with CI/CD integrated end to end</h2>
      <div class="parent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut temporibus doloribus molestias beatae debitis consequatur nisi veniam, provident cupiditate animi eligendi voluptate atque dolore. Quos itaque vitae asperiores harum aut voluptatum dolorem officiis numquam!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores beatae exercitationem natus laudantium nisi aliquam et eos nostrum, sunt illum soluta veniam nobis velit, vero mollitia ab placeat obcaecati minus fugit. Qui quas expedita quia voluptate quae odio fugit.</p></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
