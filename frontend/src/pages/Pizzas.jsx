import { useState } from 'react'
import { useData } from '../hooks/useData'
import { Link } from 'react-router-dom'

import trashImg from '../assets/images/trashIcon.svg'
import pencilImg from '../assets/images/pencilIcon.svg'
import searchImg from '../assets/images/searchIcon.svg'

import { ButtonLink } from '../components/ButtonLink'

export function Pizzas() {
    const baseUrl = 'http://localhost:3001/pizzas'

    const [search, setSearch] = useState('')

    const data = useData(baseUrl, search, 'type')

    const pizzasList = data.map(pizza => {
        return (
            <tr className="border-t border-gray-400" key={pizza.id}>
                <td className="py-2 px-8 text-center">{pizza.type}</td>
                <td className="py-2 px-8 text-center">{pizza.size}</td>
                <td className="py-2 px-8 text-center">{pizza.description}</td>
                <td className="py-2 px-8 text-center">{pizza.price}</td>
                <td className="vertical-middle py-2 px-8">
                    <div className="flex">
                    <Link to={`/pizzas/update/${pizza.id}`} className="mr-2">
                        <img src={pencilImg} alt="ícone de caneta" className="h-6" />
                    </Link>
                    <Link to={`/pizzas/delete/${pizza.id}`}>
                        <img src={trashImg} alt="ícone de lixeira" className="h-5" />
                    </Link>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <main className=" main flex flex-col items-center bg-yellow-100">
            <div className="mt-6 border-2 border-red-700 bg-red-700 flex flex-row rounded-2xl overflow-hidden">
                <input id="search" name="search" value={search} type="text" className="rounded-2xl pl-2 outline-none w-52"
                placeholder="Digite o Tipo ou Tamanho"
                onChange={e => setSearch(e.target.value)}/>
                <img src={searchImg} alt="Ícone de lupa" className="p-1" />
            </div>
            <div className="mt-8 border border-gray-400 rounded-xl overflow-hidden shadow-md">
                <table className="table-fixed">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-2 px-8 text-center">Tipo</th>
                            <th className="py-2 px-8 text-center">Tamanho</th>
                            <th className="py-2 px-8 text-center">Descrição</th>
                            <th className="py-2 px-8 text-center">Preço</th>
                            <th className="py-2 px-8 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {pizzasList}
                    </tbody>
                </table>
            </div>
            <ButtonLink to={`/pizzas/add`} color="yellow">Nova pizza</ButtonLink>
        </main>
    )
}