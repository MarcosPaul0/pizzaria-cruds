import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";

import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components/Button";
import { OutlinedButton } from "../../components/OutlinedButton";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";

export function AddSale() {
  const baseUrl = "http://localhost:3001/sales";
  const backUrl = "/sales";
  const history = useHistory();

  const [sale, setSale] = useState({
    client: "",
    date: "",
    employee: "",
    products: "",
    total: "",
  });

  function clearHandler() {
    setSale({
      client: "",
      date: "",
      employee: "",
      products: "",
      total: "",
    });
  }

  const notify = () =>
    toast.success("Venda cadastrada com sucesso!", {
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
    <main className="main bg-projectGray-25 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput
            id="client"
            name="client"
            label="Cliente"
            value={sale.client}
            onChange={(e) => setSale(changeHandler(e, sale))}
          />
          <FormInput
            id="date"
            name="date"
            type="date"
            label="Data"
            value={sale.date}
            onChange={(e) => setSale(changeHandler(e, sale))}
          />
          <FormSelect
            id="employee"
            name="employee"
            label="Funcionário"
            defaultValue="none"
            onChange={(e) => setSale(changeHandler(e, sale))}
          >
            <option value="none">Selecione uma opção</option>
          </FormSelect>
          <FormSelect
            id="products"
            name="products"
            label="Produtos"
            defaultValue="none"
            onChange={(e) => setSale(changeHandler(e, sale))}
          >
            <option value="none">Selecione uma opção</option>
          </FormSelect>
          <FormInput
            id="total"
            name="total"
            type="number"
            min="0.00"
            label="Preço (R$)"
            step="0.01"
            placeholder="0,00"
            value={sale.total}
            onChange={(e) => setSale(changeHandler(e, sale))}
          />
          <div className="mt-4 flex justify-center space-x-5">
            <Button
              color="green"
              onClick={() => addData(baseUrl, sale, clearHandler, notify)}
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