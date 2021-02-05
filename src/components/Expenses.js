
const Expenses = ({ transactions }) => {
  let income = 0;
  let expense = 0;

  // Calculate income and expense
  transactions.map(transaction => {
    if (transaction.amount > 0){
      return income += transaction.amount;
    } else if (transaction.amount < 0) {
      return expense -= transaction.amount;
    }
  })

  return (
    <div className="expense-section">
      <div className="income">
        <h4>income</h4>
        <strong style={{ color: "green" }} >${income.toFixed(2)}</strong>
      </div>
      <div className="expense">
        <h4>expense</h4>
        <strong color={{ color: "red" }} >${expense.toFixed(2)}</strong>
      </div>
    </div>
  )
}

export default Expenses
