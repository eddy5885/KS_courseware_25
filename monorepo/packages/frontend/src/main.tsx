import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './pages/hooks.tsx' // 自定义hooks 的demo
import App2 from './App.tsx' // monorepo 的demo

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App2 />
  // </StrictMode>,
)
