import { useEffect } from 'react'
import { Conteiner } from './style'
import { api } from '../../services/api'

export const TransactionsTable = () => {
    useEffect(() => {
        api.get("transations")
            .then(response => console.log(response.data))
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.000</td>
                        <td>Casa</td>
                        <td>10/09/2024</td>
                    </tr>

                </tbody>
            </table>
        </Conteiner>
    )
}
