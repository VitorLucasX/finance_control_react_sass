import './resumeitem.sass'

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <div className="container3">
      <header>
        <h2 className="header-title">{title}</h2>
        <Icon />
      </header>
      <span className="total">{value}</span>
    </div>
  )
}

export default ResumeItem
