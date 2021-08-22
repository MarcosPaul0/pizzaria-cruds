import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { OutlinedButton } from '../../components/OutlinedButton';

import { ToastContainer } from 'react-toastify';

export function AddCombo() {
  const baseUrl = "http://localhost:3001/combos";
  const backUrl = '/combos';
  
  const { successNotify } = useNotify()

  const [combo, setCombo] = useState({
    products: "",
    description: "",
    price: 0,
  });

  function clearHandler() {
    setCombo({
      name: "",
      products: "",
      price: 0,
    });
  }

  return (
    <Card>
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        value={combo.name}
        onChange={(e) => setCombo(changeHandler(e, combo))}
      />
      <FormInput
        id="products"
        name="products"
        type="text"
        label="Produtos"
        value={combo.products}
        onChange={(e) => setCombo(changeHandler(e, combo))}
      />
      <FormInput
        id="price"
        name="price"
        type="text"
        label="Preço"
        value={combo.price}
        onChange={(e) => setCombo(changeHandler(e, combo))}
      />
      <div className="mt-4 flex justify-center space-x-5">
        <Button
          color="green"
          onClick={() => {
            addData(baseUrl, combo, clearHandler)
            successNotify('Combo cadastrado com sucesso!', backUrl)
          }}
        >
          Confirmar
        </Button>
        <OutlinedButton
          color="projectRed-default"
          onClick={() => clearHandler()}
        >
          Limpar
        </OutlinedButton>
        <ToastContainer />
      </div>
    </Card>
  );
}
