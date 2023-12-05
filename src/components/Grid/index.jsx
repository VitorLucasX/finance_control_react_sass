import './grid.sass'
import GridItem from '../GridItem'

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return (
    <table>
      <thead>
        <tr>
          <th width={40}>Descrição</th>
          <th width={40}>Valor</th>
          <th width={10} alignCenter>Tipo</th>
          <th width={10}></th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  )
}

export default Grid