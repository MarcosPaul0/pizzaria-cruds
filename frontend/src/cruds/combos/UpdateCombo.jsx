import { useState } from "react";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { ToastContainer } from 'react-toastify';

export function UpdateCombo(props) {
  const baseUrl = `http://localhost:3001/combos/${props.match.params.id}`;
  const backUrl = "/combos";

  const { successNotify } = useNotify()

  const [combo, setCombo] = useState({
    name: "",
    products: "",
    price: 0,
  });

  useDataUpdate(baseUrl, setCombo);

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
      <div className="mt-4 flex justify-center">
        <Button
          color="green"
          onClick={() => {
            updateData(baseUrl, combo)
            successNotify("Combo alterado com sucesso!", backUrl)
          }}
        >
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
