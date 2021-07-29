import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { changeHandler, updateData } from '../../hooks/useCrud';
import { useDataUpdate } from '../../hooks/useDataUpdate';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { FormTextArea } from '../../components/FormTextArea';
import { FormSelect } from '../../components/FormSelect';

export function UpdatePizza(props) {
  const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`;
  const backUrl = '/pizzas';
  const history = useHistory();

  const [pizza, setPizza] = useState({
    type: '',
    size: '',
    ingredients: '',
    price: '',
  });

  useDataUpdate(baseUrl, setPizza);

  const notify = () =>
    toast.success('Pizza alterada com sucesso!', {
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
          <FormInput
            id="type"
            name="type"
            label="Tipo"
            value={pizza.type}
            onChange={(e) => setPizza(changeHandler(e, pizza))}
          />
          <FormSelect
            id="size"
            name="size"
            label="Tamanho"
            defaultValue="none"
            onChange={(e) => setPizza(changeHandler(e, pizza))}
          >
            <option value="none">Selecione uma opção</option>
            <option value="Família">Família</option>
            <option value="Média">Média</option>
            <option value="Brotinho">Brotinho</option>
          </FormSelect>
          <FormTextArea
            id="ingredients"
            name="ingredients"
            type="text"
            label="Ingredientes"
            value={pizza.ingredients}
            onChange={(e) => setPizza(changeHandler(e, pizza))}
          />
          <FormInput
            id="price"
            name="price"
            type="number"
            label="Preço (R$)"
            step="0.01"
            placeholder="0,00"
            value={pizza.price}
            onChange={(e) => setPizza(changeHandler(e, pizza))}
          />
          <div className="mt-4 flex justify-center">
            <Button color="green" onClick={() => updateData(baseUrl, pizza, notify)}>
              Confirmar
            </Button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
