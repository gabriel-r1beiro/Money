import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./style/global"
import { useState } from "react"

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  const handleOpenNewTransactionModal = () => {
      setIsNewTransactionModalOpen(true)
  };

  const handleCloseNewTransactionModal = () => {
      setIsNewTransactionModalOpen(false)
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
          >
          <h2>Cadastra Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}
