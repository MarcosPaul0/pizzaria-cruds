import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { changeHandler, updateData } from '../../hooks/useCrud'
import axios from 'axios'

import { Button } from '../../components/Button'

export function UpdateEmployee(props) {
    const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`
    const backUrl = '/employees'
    const history = useHistory()

    const [employee, setEmployee] = useState({
        name: '',
        cpf: '',
        birth: '',
        admission: ''
    })
    
    useEffect(() => {
        async function getData() {
            const data = await axios.get(`${baseUrl}`)
            setEmployee(data.data)
        }
        getData()
    }, [baseUrl])

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="text" 
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
                                name="cpf"
                                value={employee.cpf}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nascimento</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date" 
                                name="birth"
                                value={employee.birth}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Admissão</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date" 
                                name="admission"
                                value={employee.admission}
                                onChange={e => setEmployee(changeHandler(e, employee))}/>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Button
                        color="yellow"
                        onClick={() => updateData(baseUrl, employee, backUrl, history)}>
                            Confirmar   
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}