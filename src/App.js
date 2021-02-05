import React, { useState } from 'react'
import AddTransaction from './components/AddTransaction'
import Balance from "./components/Balance"
import Expenses from "./components/Expenses"
import Header from "./components/Header"
import TransactionHistory from "./components/TransactionHistory"

const App = () => {
  const [transactions, setTransactions] = useState([]);

  //Add transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <Expenses transactions={transactions} />
      <TransactionHistory onDelete={deleteTransaction} transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
    </div>
  )
}

export default App
