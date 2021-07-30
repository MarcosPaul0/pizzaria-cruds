import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { changeHandler, addData } from "../../hooks/useCrud";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { OutlinedButton } from '../../components/OutlinedButton';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AddCombo() {
  const baseUrl = "http://localhost:3001/combos";
  const backUrl = '/combos';
  const history = useHistory();

  const [combo, setCombo] = useState({
    code: "",
    products: "",
    description: "",
    price: "",
  });

  function clearHandler() {
    setCombo({
      code: "",
      name: "",
      products: "",
      price: "",
    });
  }

  const notify = () =>
    toast.success('Combo cadastrado com sucesso!', {
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
    <main className="main bg-yellow-100 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput
            id="code"
            name="code"
            type="text"
            label="Código"
            value={combo.code}
            onChange={(e) => setCombo(changeHandler(e, combo))}
          />
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
              onClick={() => addData(baseUrl, combo, clearHandler, notify)}
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
        </div>
      </div>
    </main>
  );
}
