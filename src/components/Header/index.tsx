import logoImg from "../../assets/Logo.png"
import { Conteiner, Content } from "./style"

export const Header = () => {
    return (
        <Conteiner>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova trasação
                </button>
            </Content>
        </Conteiner>
    )
};
