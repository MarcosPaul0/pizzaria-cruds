import { useData } from '../hooks/useData'
import { Link } from 'react-router-dom'

import trashImg from '../assets/images/trashIcon.svg'
import pencilImg from '../assets/images/pencilIcon.svg'

import { ButtonLink } from '../components/ButtonLink'

export function Pizzas() {
    const baseUrl = 'http://localhost:3001/pizzas'

    const data = useData(baseUrl)

    const pizzasList = data.map(pizza => {
        return (
            <tr className="border-t border-gray-400" key={pizza.id}>
                <td className="py-2 px-8 text-center">{pizza.code}</td>
                <td className="py-2 px-8 text-center">{pizza.type}</td>
                <td className="py-2 px-8 text-center">{pizza.description}</td>
                <td className="py-2 px-8 text-center">{pizza.price}</td>
                <td className="flex py-2 px-8 text-center">
                    <Link to={`/pizzas/update/${pizza.id}`} className="mr-2">
                        <img src={pencilImg} alt="ícone de caneta" className="h-6" />
                    </Link>
                    <Link to={`/pizzas/delete/${pizza.id}`}>
                        <img src={trashImg} alt="ícone de lixeira" className="h-5" />
                    </Link>
                </td>
            </tr>
        )
    })

    return (
        <main className=" main flex flex-col items-center bg-yellow-100">
            <div className="mt-8 border border-gray-400 rounded-xl overflow-hidden shadow-md">
                <table className="table-fixed">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-2 px-8 text-center">Código</th>
                            <th className="py-2 px-8 text-center">Tipo</th>
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
            <ButtonLink to={`/pizzas/add`} color="yellow">Adicionar nova pizza</ButtonLink>
        </main>
    )
}