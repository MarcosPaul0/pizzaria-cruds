import { useState } from "react";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";

import { ToastContainer } from 'react-toastify';

export function UpdateAccompaniment(props) {
  const baseUrl = `http://localhost:3001/accompaniments/${props.match.params.id}`;
  const backUrl = "/accompaniments";

  const { successNotify } = useNotify()

  const [accompaniment, setAccompaniment] = useState({
    name: "",
    description: "",
    price: 0,
  });

  useDataUpdate(baseUrl, setAccompaniment);

  return (
    <Card>
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
          color="green"
          onClick={() => {
            updateData(baseUrl, accompaniment)
            successNotify("Acompanhamento alterado com sucesso!", backUrl)
          }}
        >
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
