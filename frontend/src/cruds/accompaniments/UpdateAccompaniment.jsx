import { useState } from "react";
import { useHistory } from "react-router-dom";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function UpdateAccompaniment(props) {
  const baseUrl = `http://localhost:3001/accompaniments/${props.match.params.id}`;
  const backUrl = "/accompaniments";
  const history = useHistory();

  const [accompaniment, setAccompaniment] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
  });

  const notify = () =>
    toast.success("Acompanhamento alterado com sucesso!", {
      position: "bottom-right",
      onClose: () => history.push(backUrl),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  useDataUpdate(baseUrl, setAccompaniment);

  return (
    <main className="main bg-yellow-100 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput
            id="code"
            name="code"
            type="text"
            label="Código"
            value={accompaniment.code}
            onChange={(e) => setAccompaniment(changeHandler(e, accompaniment))}
          />
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
          <div className="mt-4 flex justify-center">
            <Button
              color="yellow"
              onClick={() =>
                updateData(baseUrl, accompaniment, notify)
              }
            >
              Confirmar
            </Button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
