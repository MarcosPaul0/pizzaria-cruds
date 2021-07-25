import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { changeHandler, updateData } from '../../hooks/useCrud'
import { useDataUpdate } from '../../hooks/useDataUpdate'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { FormTextArea } from '../../components/FormTextArea'
import { FormSelect } from '../../components/FormSelect'

export function UpdatePizza(props) {
    const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`
    const backUrl = '/pizzas'
    const history = useHistory()

    const [pizza, setPizza] = useState({
        type: '',
        size: '',
        description: '',
        price: ''
    })
    
    useDataUpdate(baseUrl, setPizza)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                   <FormSelect id="type" name="type" label="Tipo"
                    onChange={e => setPizza(changeHandler(e, pizza))}>
                        <option value="none" selected disabled hidden>
                            Selecione uma opção
                        </option>
                        <option value="Calabresa">Calabresa</option>
                        <option value="Portuguesa">Portuguesa</option>
                        <option value="Muçarela">Muçarela</option>
                        <option value="Marguerita">Marguerita</option>
                        <option value="Brócolis">Brócolis</option>
                        <option value="Frango Catupiry">Frango Catupiry</option>
                        <option value="Quatro Queijos">Quatro queijos</option>
                    </FormSelect>
                   <FormSelect id="size" name="size" label="Tamanho"
                    onChange={e => setPizza(changeHandler(e, pizza))}>
                        <option value="none" selected disabled hidden>
                            Selecione uma opção
                        </option>
                        <option value="Família">Família</option>
                        <option value="Média">Média</option>
                        <option value="Brotinho">Brotinho</option>
                    </FormSelect>
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