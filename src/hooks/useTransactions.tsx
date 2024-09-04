import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
};

type TrasactionInput = Omit<Transaction, "id" | "createdAt">

interface ProviderProps {
    children: ReactNode
};

interface TransactionsContextData {
    transactions: Transaction[];
    creatTransaction: (transaction: TrasactionInput) => Promise<void>
}

// Interface End

const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionProvider = ({children}: ProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    const creatTransaction = async (transactionInput: TrasactionInput) => {
        const response = await api.post("transactions", {...transactionInput, createdAt: new Date()});
        const { transaction } = response.data

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{transactions, creatTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
};

export function useTransaction() {
    const context = useContext(TransactionContext);

    return context;
}