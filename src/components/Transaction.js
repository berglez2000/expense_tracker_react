
const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? "-" : "+"
  const color = transaction.amount < 0 ? "red" : "rgb(78, 167, 19)"

  const onClick = () => {
    onDelete(transaction.id)
  }

  return (
    <div 
      className="transaction" 
      style={{ borderRight: `5px ${color} solid` }}
    >
      <div className="hide">
        <button onClick={onClick} className="delete-btn">x</button>
      </div>
      <div className="inner">
        <p>{transaction.name}</p>
        <p>{sign}${Math.abs(transaction.amount)}</p>
      </div>
    </div>
  )
}

export default Transaction
