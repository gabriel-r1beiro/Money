import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./style/global"
import { useState } from "react"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionProvider } from "./hooks/useTransactions"

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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionProvider>
  )
}
