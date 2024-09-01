import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
import { Conteiner } from "./style"

export const Dashboard = () => {
    return (
        <Conteiner>
            <Summary />
            <TransactionsTable />
        </Conteiner>
    )
}
