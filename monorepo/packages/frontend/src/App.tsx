import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config'

function App() {
  const [count, setCount] = useState(0)
  const [config2,setConfig] = useState({})

  useEffect(() => {
    // 模拟异步获取配置

    fetch('/api/getValue')
      .then((response) => response.json())
      .then((data) => {
        setConfig(data)
      })
      .catch((error) => {
        console.error('Error fetching config:', error)
      })

  }, [])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>前端配置内容：</h2>
      <pre>{JSON.stringify(config, null, 2)}</pre>
      <h2>IQprice</h2>
      <div>{config.iqprice}</div>
      <h2>接口配置内容：</h2>
      <pre>{JSON.stringify(config2, null, 2)}</pre>
    </>
  )
}

export default App
