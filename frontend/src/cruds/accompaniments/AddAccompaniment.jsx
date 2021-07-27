import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";
import { OutlinedButton } from "../../components/OutlinedButton";

export function AddAccompaniment() {
  const baseUrl = "http://localhost:3001/accompaniments";

  const [accompaniment, setAccompaniment] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
  });

  function clearHandler() {
    setAccompaniment({
      code: "",
      name: "",
      description: "",
      price: "",
    });
  }

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
          <div className="mt-4 flex justify-center space-x-5">
            <Button
              color="yellow"
              onClick={() => addData(baseUrl, accompaniment, clearHandler)}
            >
              Confirmar
            </Button>
            <OutlinedButton
              color="projectRed-default"
              onClick={() => clearHandler()}
            >
              Limpar
            </OutlinedButton>
          </div>
        </div>
      </div>
    </main>
  );
}
