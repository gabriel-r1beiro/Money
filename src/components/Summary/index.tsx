import { Conteiner } from "./style"
import icomeImg from "../../assets/Icons.png"
import outcomeImg from "../../assets/saidas.png"
import totalImg from "../../assets/money.png"
import {  useTransaction } from "../../hooks/useTransactions"

export const Summary = () => {
    const { transactions } = useTransaction();
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === "deposit") {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        };

        return acc;
    }, {
        deposit: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Conteiner>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Entradas" />
                </header>
                <strong>{
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(summary.deposit)
                        }
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> - {
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(summary.withdraws)
                    }
                </strong>
            </div>

            <div className="highlitght-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Conteiner>
    )
}
