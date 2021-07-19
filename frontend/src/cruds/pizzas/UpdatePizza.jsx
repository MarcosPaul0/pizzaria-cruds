import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { changeHandler, updateData } from '../../hooks/useCrud'
import { useDataUpdate } from '../../hooks/useDataUpdate'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { FormTextArea } from '../../components/FormTextArea'

export function UpdatePizza(props) {
    const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`
    const backUrl = '/pizzas'
    const history = useHistory()

    const [pizza, setPizza] = useState({
        code: '',
        type: '',
        description: '',
        price: ''
    })
    
    useDataUpdate(baseUrl, setPizza)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <FormInput id="code" name="code" type="text" label="Código" value={pizza.code}
                    onChange={e => setPizza(changeHandler(e, pizza))} />
                    <FormInput id="type" name="type" type="text" label="Tipo" value={pizza.type}
                    onChange={e => setPizza(changeHandler(e, pizza))} />
                    <FormTextArea id="description" name="description" type="text" label="Descrição" value={pizza.description}
                    onChange={e => setPizza(changeHandler(e, pizza))} />
                    <FormInput id="price" name="price" type="text" label="Preço" value={pizza.price}
                    onChange={e => setPizza(changeHandler(e, pizza))} />
                    <div className="mt-4 flex justify-center">
                        <Button color="yellow" onClick={() => updateData(baseUrl, pizza, backUrl, history)}>
                            Confirmar   
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}