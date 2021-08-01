import { useState } from "react";
import { useHistory } from "react-router-dom";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";
import { useData } from '../../hooks/useData'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";

export function UpdateSale(props) {
  const baseUrl = `http://localhost:3001/sales/${props.match.params.id}`;
  const backUrl = "/sales";
  const history = useHistory();

  const [sale, setSale] = useState({
    client: "",
    date: "",
    employee: "",
    products: "",
    total: "",
  });

  useDataUpdate(baseUrl, setSale);

  const employees = useData('http://localhost:3001/employees', 'name')

  const employeeOptions = employees.map(employee =>
    <option key={employee.cpf} value={employee.name}>{employee.name}</option>
    )

  const notify = () =>
    toast.success("Venda alterada com sucesso!", {
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
            {employeeOptions}
          </FormSelect>
          <FormInput
            id="products"
            name="products"
            label="Produtos"
            value={sale.products}
            onChange={(e) => setSale(changeHandler(e, sale))}
          >
          </FormInput>
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
            <Button color="green" onClick={() => updateData(baseUrl, sale, notify)}>
              Confirmar
            </Button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
