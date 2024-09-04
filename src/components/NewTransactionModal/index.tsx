import { useTransaction } from "../../hooks/useTransactions";
import { Conteiner, RadioBox, TransactionTypeConteiner } from "./style";
import close from "../../assets/close.png"
import incomeImg from "../../assets/Icons.png"
import outcomeImg from "../../assets/saidas.png"

import { FormEvent, useState } from "react";
import Modal from "react-modal";

//                          End Import

interface NewModalProps{
    isOpen: boolean;
    onRequestClose: () => void
};

export const NewTransactionModal = ({isOpen, onRequestClose}: NewModalProps) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const { creatTransaction } = useTransaction()

    const handleCreateNewTransaction = async (Event: FormEvent) => {
        Event.preventDefault();

        await creatTransaction({
            title,
            amount: amount,
            category,
            type,
        });

        setTitle("");
        setAmount(0);
        setCategory("");
        setType("deposit");


        onRequestClose();
    };

    return (
        // Modal gera uma pagina por cima das paginas, como a nova transações
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-conteiner"
        >   
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                
                <img src={close} alt="fechar modal" />
            </button>

            <Conteiner onSubmit={handleCreateNewTransaction}>
                <h2>Cadastra Transação</h2>
                
                <input 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} />
                <input 
                    placeholder="Valor" 
                    type="number"
                    value={amount} 
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeConteiner>
                    <RadioBox
                        type="button"
                        onClick={() => { setType("deposit") }}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType("withdraw") }}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeConteiner>

                <input 
                    placeholder="Categoria" 
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Conteiner>
        </Modal>
    )
}
