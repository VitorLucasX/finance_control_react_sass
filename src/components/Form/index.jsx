import React, { useState } from "react"

import './form.sass'
import Grid from '../Grid'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!')
      return
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!')
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transaction)

    setDesc('')
    setAmount('')
  };

  return (
      <>
      <div className="container4">
        <div className="input-content">
            <label>Descrição</label>
            <input className='input-text' value={desc}
             onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className="input-content">
          <label>Valor</label>
          <input className='input-text' value={amount}
           type='number' onChange={(e) => setAmount (e.target.value)}/>
        </div>
        <div className="radio-group">
          <input className='input-radio' type="radio" id='rIncome'
           defaultChecked name='group1' onChange={() => setExpense(!isExpense)} 
           />
          <label htmlFor="rIncome">Entrada</label>
          <input className="input-radio" type="radio" id='rExpenses'
           name='group1' onChange={() => setExpense(!isExpense)} 
           />
          <label htmlFor="rExpenses">Saída</label>
        </div>
        <button className='btn-submit' onClick={handleSave}>ADICIONAR</button>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
      </>
    )
}

export default Form
