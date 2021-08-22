import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";
import { useNotify } from "../../hooks/useNotify";

import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { OutlinedButton } from "../../components/OutlinedButton";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";
import { FormSelect } from "../../components/FormSelect";

import { ToastContainer } from "react-toastify";

export function AddPizza() {
  const baseUrl = "http://localhost:3001/pizzas";
  const backUrl = "/pizzas";

  const { successNotify } = useNotify();

  const [pizza, setPizza] = useState({
    name: "",
    size: "",
    ingredients: "",
    price: 0,
  });

  function clearHandler() {
    setPizza({
      name: "",
      size: "",
      ingredients: "",
      price: 0,
    });
  }

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
        placeholder="Recheio da pizza"
        onChange={(e) => setPizza(changeHandler(e, pizza))}
      />
      <FormInput
        id="price"
        name="price"
        type="number"
        min="0.00"
        max="500.00"
        label="Preço (R$)"
        step="0.01"
        placeholder="0,00"
        value={pizza.price}
        onChange={(e) => setPizza(changeHandler(e, pizza))}
      />
      <div className="mt-4 flex justify-center space-x-5">
        <Button
          color="green"
          onClick={() => {
            addData(baseUrl, pizza, clearHandler);
            successNotify("Pizza cadastrada com sucesso!", backUrl);
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
