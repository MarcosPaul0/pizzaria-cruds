import { useState } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";

import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components/Button";
import { OutlinedButton } from "../../components/OutlinedButton";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";
import { FormTextArea } from "../../components/FormTextArea";

export function AddPayment() {
  const baseUrl = "http://localhost:3001/payments";
  const backUrl = "/payments";
  const history = useHistory();

  const [payment, setPayment] = useState({
    client: "",
    date: "",
    employee: "",
    amount: "",
    receipt: "",
  });

  function clearHandler() {
    setPayment({
      client: "",
      date: "",
      employee: "",
      amount: "",
      receipt: "",
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
            value={payment.client}
            onChange={(e) => setPayment(changeHandler(e, payment))}
          />
          <FormInput
            id="date"
            name="date"
            type="date"
            label="Data"
            value={payment.date}
            onChange={(e) => setPayment(changeHandler(e, payment))}
          />
          <FormSelect
            id="employee"
            name="employee"
            label="Funcionário"
            defaultValue="none"
            onChange={(e) => setPayment(changeHandler(e, payment))}
          >
            <option value="none">Selecione uma opção</option>
          </FormSelect>
          <FormInput
            id="amount"
            name="amount"
            type="number"
            label="Montante"
            value={payment.amount}
            onChange={(e) => setPayment(changeHandler(e, payment))}
          />
          <FormTextArea
            id="receipt"
            name="receipt"
            type="text"
            label="Recibo"
            value={payment.receipt}
            onChange={(e) => setPayment(changeHandler(e, payment))}
          />
          <div className="mt-4 flex justify-center space-x-5">
            <Button
              color="green"
              onClick={() => addData(baseUrl, payment, clearHandler, notify)}
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
