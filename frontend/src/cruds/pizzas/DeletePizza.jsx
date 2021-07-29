import { useHistory } from 'react-router-dom';
import { deleteData } from '../../hooks/useCrud';
import { useDataDelete } from '../../hooks/useDataDelete';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { OutlinedButton } from '../../components/OutlinedButton';
import { FormInput } from '../../components/FormInput';
import { FormTextArea } from '../../components/FormTextArea';

export function DeletePizza(props) {
  const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`;
  const backUrl = '/pizzas';
  const history = useHistory();

  const pizza = useDataDelete(
    {
      type: '',
      size: '',
      ingredients: '',
      price: '',
    },
    baseUrl
  );

  const notify = () =>
    toast.error('Pizza excluída!', {
      position: 'bottom-right',
      onClose: () => history.push(backUrl),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <main className="main bg-projectGray-25 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput id="type" name="type" type="text" label="Tipo" value={pizza.type} disabled />
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
            <OutlinedButton color="projectRed-default" onClick={() => deleteData(baseUrl, notify)}>
              Excluir
            </OutlinedButton>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
