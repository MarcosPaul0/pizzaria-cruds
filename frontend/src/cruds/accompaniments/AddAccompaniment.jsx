import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { changeHandler, addData } from "../../hooks/useCrud";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";
import { OutlinedButton } from "../../components/OutlinedButton";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AddAccompaniment() {
  const baseUrl = "http://localhost:3001/accompaniments";
  const backUrl = '/accompaniments';
  const history = useHistory();

  const [accompaniment, setAccompaniment] = useState({
    name: "",
    description: "",
    price: "",
  });

  function clearHandler() {
    setAccompaniment({
      name: "",
      description: "",
      price: "",
    });
  }

  const notify = () =>
    toast.success('Acompanhamento cadastrado com sucesso!', {
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
            id="name"
            name="name"
            type="text"
            label="Nome"
            value={accompaniment.name}
            onChange={(e) => setAccompaniment(changeHandler(e, accompaniment))}
          />
          <FormTextArea
            id="description"
            name="description"
            type="text"
            label="Descrição"
            value={accompaniment.description}
            onChange={(e) => setAccompaniment(changeHandler(e, accompaniment))}
          />
          <FormInput
            id="price"
            name="price"
            type="text"
            label="Preço"
            value={accompaniment.price}
            onChange={(e) => setAccompaniment(changeHandler(e, accompaniment))}
          />
          <div className="mt-4 flex justify-center space-x-5">
            <Button
              color="green"
              onClick={() => addData(baseUrl, accompaniment, clearHandler, notify)}
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
