import { useState } from 'react'
import { changeHandler, addData } from '../../hooks/useCrud'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { FormTextArea } from '../../components/FormTextArea'

export function AddPizza() {
    const baseUrl = 'http://localhost:3001/pizzas'

    const [pizza, setPizza] = useState({
        code: '',
        type: '',
        description: '',
        price: ''
    })

    function clearHandler() {
        setPizza({
            code: '',
            type: '',
            description: '',
            price: ''
        })
    }

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
                    <div className="mt-4 flex justify-center space-x-5">
                        <Button color="yellow" onClick={() => addData(baseUrl, pizza, clearHandler)}>
                            Confirmar
                        </Button>
                        <Button color="red" onClick={() => clearHandler()}>
                            Limpar
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}