import { useHistory } from 'react-router-dom'
import { deleteData } from '../../hooks/useCrud'
import { useDataDelete } from '../../hooks/useDataDelete'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { FormTextArea } from '../../components/FormTextArea'

export function DeletePizza(props) {
    const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`
    const backUrl = '/pizzas'
    const history = useHistory()

    const pizza = useDataDelete({
        code: '',
        type: '',
        description: '',
        price: ''
    }, baseUrl)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <FormInput id="code" name="code" type="text" label="Código" value={pizza.code} disabled />
                    <FormInput id="type" name="type" type="text" label="Tipo" value={pizza.type} disabled />
                    <FormTextArea id="description" name="description" type="text" label="Descrição" value={pizza.description} disabled />
                    <FormInput id="price" name="price" type="text" label="Preço" value={pizza.price} disabled />
                    <div className="mt-4 flex justify-center">
                        <Button color="red" onClick={() => deleteData(baseUrl, backUrl, history)}>
                            Excluir
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}