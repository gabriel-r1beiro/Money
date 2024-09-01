import { Conteiner } from "./style"
import icomeImg from "../../assets/Icons.png"
import outcomeImg from "../../assets/saidas.png"
import totalImg from "../../assets/money.png"

export const Summary = () => {
    return (
        <Conteiner>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlitght-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Conteiner>
    )
}
