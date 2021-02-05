import Transaction from './Transaction'

const TransactionHistory = ({ transactions, onDelete }) => {

  return (
    <div className="transaction-section">
      <h3>History</h3>
      <hr/>
      {transactions.length > 0 ? transactions.map(transaction => (
        <Transaction onDelete={onDelete} key={transaction.id} transaction={transaction} />
      )) : "No expenses yet"}
    </div>
  )
}

export default TransactionHistory
