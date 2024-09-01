import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { createServer } from "miragejs"

createServer({
  routes(){
    this.namespace = 'api';
    this.get("/transations",() => {
      return[
        {
          id: 1, 
          title: "transition 1", 
          amount: 400, 
          type: "deposit", 
          category: "Food", 
          createdAt: new Date(),
        }
      ]
    } )
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
