import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";
import { useNotify } from "../../hooks/useNotify";

import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";
import { OutlinedButton } from "../../components/OutlinedButton";

import { ToastContainer } from "react-toastify";

export function AddAccompaniment() {
  const baseUrl = "http://localhost:3001/accompaniments";
  const backUrl = "/accompaniments";

  const { successNotify } = useNotify();

  const [accompaniment, setAccompaniment] = useState({
    name: "",
    description: "",
    price: 0,
  });

  function clearHandler() {
    setAccompaniment({
      name: "",
      description: "",
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
          onClick={() => {
            addData(baseUrl, accompaniment, clearHandler);
            successNotify("Acompanhamento cadastrado com sucesso!", backUrl);
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
