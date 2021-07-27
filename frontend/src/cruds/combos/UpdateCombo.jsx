import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { changeHandler, updateData } from '../../hooks/useCrud'
import { useDataUpdate } from '../../hooks/useDataUpdate'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'

export function UpdateCombo(props) {
    const baseUrl = `http://localhost:3001/combos/${props.match.params.id}`
    const backUrl = '/combos'
    const history = useHistory()

    const [combo, setCombo] = useState({
        code: '',
        name: '',
        products: '',
        price: ''
    })
    
    useDataUpdate(baseUrl, setCombo)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <FormInput id="code" name="code" type="text" label="Código" value={combo.code}
                    onChange={e => setCombo(changeHandler(e, combo))} />
                    <FormInput id="name" name="name" type="text" label="Nome" value={combo.name}
                    onChange={e => setCombo(changeHandler(e, combo))} />
                    <FormInput id="products" name="products" type="text" label="Produtos" value={combo.products}
                    onChange={e => setCombo(changeHandler(e, combo))} />
                    <FormInput id="price" name="price" type="text" label="Preço" value={combo.price}
                    onChange={e => setCombo(changeHandler(e, combo))} />
                    <div className="mt-4 flex justify-center">
                        <Button color="green" onClick={() => updateData(baseUrl, combo, backUrl, history)}>
                            Confirmar   
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}