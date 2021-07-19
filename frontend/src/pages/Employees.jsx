import { useData } from '../hooks/useData'
import { Link } from 'react-router-dom'

import trashImg from '../assets/images/trashIcon.svg'
import pencilImg from '../assets/images/pencilIcon.svg'

import { ButtonLink } from '../components/ButtonLink'

export function Employees() {
    const baseUrl = 'http://localhost:3001/employees'

    const data = useData(baseUrl)

    const employeesList = data.map(employee => {
        return (
            <tr className="border-t border-gray-400" key={employee.id}>
                <td className="py-2 px-8 text-center">{employee.cpf}</td>
                <td className="py-2 px-8 text-center">{employee.name}</td>
                <td className="py-2 px-8 text-center">{employee.birth}</td>
                <td className="py-2 px-8 text-center">{employee.admission}</td>
                <td className="flex py-2 px-8 text-center">
                    <Link to={`/employees/update/${employee.id}`} className="mr-2">
                        <img src={pencilImg} alt="ícone de caneta" className="h-6" />
                    </Link>
                    <Link to={`/employees/delete/${employee.id}`}>
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
                            <th className="py-2 px-8 text-center">CPF</th>
                            <th className="py-2 px-8 text-center">Nome</th>
                            <th className="py-2 px-8 text-center">Admição</th>
                            <th className="py-2 px-8 text-center">Nascimento</th>
                            <th className="py-2 px-8 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {employeesList}
                    </tbody>
                </table>
            </div>
            <ButtonLink to={`/employees/add`} color="yellow">Adicionar novo Funcionário</ButtonLink>
        </main>
    )
}