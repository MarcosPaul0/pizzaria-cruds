import { useState } from "react";
import { useHistory } from "react-router-dom";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function UpdateCombo(props) {
  const baseUrl = `http://localhost:3001/combos/${props.match.params.id}`;
  const backUrl = "/combos";
  const history = useHistory();

  const [combo, setCombo] = useState({
    name: "",
    products: "",
    price: "",
  });

  useDataUpdate(baseUrl, setCombo);

  const notify = () =>
    toast.success("Combo alterado com sucesso!", {
      position: "bottom-right",
      onClose: () => history.push(backUrl),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

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
          onClick={() => updateData(baseUrl, combo, notify)}
        >
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
