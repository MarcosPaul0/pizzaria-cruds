import { deleteData } from '../../hooks/useCrud';
import { useDataDelete } from '../../hooks/useDataDelete';
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { OutlinedButton } from '../../components/OutlinedButton';
import { FormInput } from '../../components/FormInput';
import { FormTextArea } from '../../components/FormTextArea';

import { ToastContainer } from 'react-toastify';

export function DeletePizza(props) {
  const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`;
  const backUrl = '/pizzas';
  const { errorNotify } = useNotify()

  const pizza = useDataDelete(
    {
      name: '',
      size: '',
      ingredients: '',
      price: 0,
    },
    baseUrl
  );

  return (
    <Card>
      <FormInput id="name" name="name" type="text" label="Tipo" value={pizza.name} disabled />
      <FormInput id="code" name="code" type="text" label="Código" value={pizza.size} disabled />
      <FormTextArea
        id="ingredients"
        name="ingredients"
        type="text"
        label="Descrição"
        value={pizza.ingredients}
        disabled
      />
      <FormInput
        id="price"
        name="price"
        type="text"
        label="Preço (R$)"
        placeholder="0,00"
        value={pizza.price}
        disabled
      />
      <div className="mt-4 flex justify-center">
        <OutlinedButton color="projectRed-default" onClick={() => {
          errorNotify('Pizza excluída!', backUrl)
          deleteData(baseUrl)
        }}>
          Excluir
        </OutlinedButton>
        <ToastContainer />
      </div>
    </Card>
  );
}
