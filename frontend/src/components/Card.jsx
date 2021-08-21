export function Card(props) {
  return (
    <main className={`
      main bg-projectGray-25
      flex flex-col items-center`
    }>
      <div className={`
        w-96 mt-8 rounded-lg shadow-lg bg-white 
        border border-gray-400 p-5
      `}>
        {props.children}
      </div>
    </main>
  )
}