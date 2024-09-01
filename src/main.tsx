import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { createServer, Model } from "miragejs"

createServer({

  models: {
    transactions: Model
  },
  routes(){
    this.namespace = 'api';

    this.get("/transactions",() => {
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

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transactions")
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
