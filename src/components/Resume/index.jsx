import ResumeItem from '../ResumeItem'
import './resume.sass'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa"

const Resume = ({ income, expense, total }) => {
  return (
    <div className="container2">
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  )
}

export default Resume
