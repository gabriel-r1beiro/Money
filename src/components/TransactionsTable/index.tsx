import { useEffect, useState } from 'react'
import { Conteiner } from './style'
import { api } from '../../services/api'

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Conteiner>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === "withdraw" ? " - " : ""}
                                {
                                    new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(transaction.amount)
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>{
                                    // Formatar Data - Valores
                                    new Intl.DateTimeFormat("pt-BR").format(
                                        new Date(transaction.createdAt)
                                    )
                                }</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Conteiner>
    )
}
