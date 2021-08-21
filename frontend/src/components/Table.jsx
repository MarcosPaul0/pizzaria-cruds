export function Table(props) {
  return (
    <div className={`
      mt-8 border border-gray-400 rounded-xl 
      overflow-hidden shadow-md
    `}>
      <table className="table-fixed">
        {props.children}
      </table>
    </div>
  )
}