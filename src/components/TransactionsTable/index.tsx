import { Conteiner } from './style'
import { useTransaction } from '../../hooks/useTransactions';

export const TransactionsTable = () => {
    const { transactions } = useTransaction();
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
