
const Balance = ({ transactions }) => {
  let balance = 0;

  // Calculate balance
  transactions.map(transaction => {
    balance += transaction.amount;
  })
  
  return (
    <div className="balance-section">
      <h3>Your Balance</h3>
      <hr/>
      <strong className="balance">${balance.toFixed(2)}</strong>
    </div>
  )
}

export default Balance
