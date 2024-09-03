import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { createServer, Model } from "miragejs"

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer Web design",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2024-09-03 17:57:59"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2024-09-03 15:00:00"),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get("/transactions",() => {
      return this.schema.all("transaction")
    } )

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction", data)
    })
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
