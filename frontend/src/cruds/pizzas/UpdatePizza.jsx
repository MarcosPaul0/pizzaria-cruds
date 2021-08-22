import { useState } from 'react';
import { changeHandler, updateData } from '../../hooks/useCrud';
import { useDataUpdate } from '../../hooks/useDataUpdate';
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';
import { FormTextArea } from '../../components/FormTextArea';

import { FormSelect } from '../../components/FormSelect';
import { ToastContainer } from 'react-toastify';

export function UpdatePizza(props) {
  const baseUrl = `http://localhost:3001/pizzas/${props.match.params.id}`;
  const backUrl = '/pizzas';

  const { successNotify } = useNotify()

  const [pizza, setPizza] = useState({
    name: '',
    size: '',
    ingredients: '',
    price: 0,
  });

  useDataUpdate(baseUrl, setPizza);

  return (
    <Card>
      <FormInput
        id="name"
        name="name"
        label="Tipo"
        value={pizza.name}
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
        <Button color="green" onClick={() => {
          updateData(baseUrl, pizza)
          successNotify('Pizza alterada com sucesso!', backUrl)
        }}>
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
