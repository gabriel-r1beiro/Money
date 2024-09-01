import logoImg from "../../assets/Logo.png"
import { Conteiner, Content } from "./style"

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    
    return (
        <Conteiner>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova trasação
                </button>

                
            </Content>
        </Conteiner>
    )
};
