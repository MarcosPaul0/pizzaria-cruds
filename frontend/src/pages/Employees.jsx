import { useData } from '../hooks/useData'
import { Link } from 'react-router-dom'

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
                        <svg className="w-6 h-6"fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </Link>
                    <Link to={`/employees/delete/${employee.id}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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