import searchImg from '../assets/images/searchIcon.svg';

export function Search(props) {
  return (
    <div className="mt-6 border-2 border-red-700 bg-red-700 flex flex-row rounded-2xl overflow-hidden">
        <input
          id="search"
          name="search"
          type="text"
          className="rounded-2xl pl-2 outline-none w-52"
          {...props}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
  )
}