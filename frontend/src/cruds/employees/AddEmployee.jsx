import { useState } from 'react'
import { changeHandler, addData } from '../../hooks/useCrud'
import { Button } from '../../components/Button'

export function AddEmployee() {
    const baseUrl = 'http://localhost:3001/employees'

    const [employee, setEmployee] = useState({
        name: '',
        cpf: '',
        birth: '',
        admission: ''
    })

    function clearHandler() {
        setEmployee({
            name: '',
            cpf: '',
            birth: '',
            admission: ''
        })
    }

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="text"
                                id="name"
                                name="name"
                                value={employee.name}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300" 
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={employee.cpf}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="birth" className="block text-sm font-medium text-gray-700">Nascimento</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date"
                                id="birth"
                                name="birth"
                                value={employee.birth}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="admission" className="block text-sm font-medium text-gray-700">Admissão</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date"
                                id="admission"
                                name="admission"
                                value={employee.admission}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-5">
                        <Button
                        color="yellow"
                        onClick={() => addData(baseUrl, employee, clearHandler)}>
                            Confirmar
                        </Button>
                        <Button
                        color="red"
                        onClick={() => clearHandler()}>
                            Limpar
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}