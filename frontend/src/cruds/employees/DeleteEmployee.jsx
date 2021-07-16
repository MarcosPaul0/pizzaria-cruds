import { useHistory } from 'react-router-dom'
import { deleteData } from '../../hooks/useCrud'
import { useDataCrud } from '../../hooks/useDataCrud'

import { Button } from '../../components/Button'

export function DeleteEmployee(props) {
    const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`
    const backUrl = '/employees'
    const history = useHistory()

    const employee = useDataCrud({
        name: '',
        cpf: '',
        birth: '',
        admission: ''
    }, baseUrl)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="text" 
                                name="name"
                                disabled
                                value={employee.name}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300" 
                                type="text" 
                                name="cpf"
                                disabled
                                value={employee.cpf}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nascimento</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date" 
                                name="birth"
                                disabled
                                value={employee.birth}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Admissão</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input className="pl-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300"
                                type="date" 
                                name="admission"
                                disabled
                                value={employee.admission}/>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Button
                        color="red"
                        onClick={() => deleteData(baseUrl, backUrl, history)}>
                            Excluir
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}