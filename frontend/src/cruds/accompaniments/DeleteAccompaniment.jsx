import { useHistory } from 'react-router-dom'
import { deleteData } from '../../hooks/useCrud'
import { useDataDelete } from '../../hooks/useDataDelete'

import { Button } from '../../components/Button'
import { FormInput } from '../../components/FormInput'
import { FormTextArea } from '../../components/FormTextArea'

export function DeleteAccompaniment(props) {
    const baseUrl = `http://localhost:3001/accompaniments/${props.match.params.id}`
    const backUrl = '/accompaniments'
    const history = useHistory()

    const accompaniment = useDataDelete({
        code: '',
        name: '',
        description: '',
        price: ''
    }, baseUrl)

    return (
        <main className="main bg-yellow-100 flex flex-col items-center">
            <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <FormInput id="code" name="code" type="text" label="Código" value={accompaniment.code} disabled />
                    <FormInput id="name" name="name" type="text" label="Nome" value={accompaniment.name} disabled />
                    <FormTextArea id="description" name="description" type="text" label="Descrição" value={accompaniment.description} disabled />
                    <FormInput id="price" name="price" type="text" label="Preço" value={accompaniment.price} disabled />
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