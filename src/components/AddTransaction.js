import React, { useState } from 'react'

const AddTransaction = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name){
      alert("Please enter a name");
      return;
    } else if (!number || number === 0){
      alert("Please enter a number")
      return
    }

    const id = Math.floor(Math.random() * 1000000000)

    onAdd({ id: id, name: name, amount: +number })
    setName("")
    setNumber(0)
  }

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <hr/>
      <form className="submit" onSubmit={onSubmit} >
        <input 
          type="text" 
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Enter Amount..." 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
