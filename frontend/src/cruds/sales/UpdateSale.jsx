import { useState } from "react";
import { changeHandler, updateData } from "../../hooks/useCrud";
import { useDataUpdate } from "../../hooks/useDataUpdate";
import { useData } from '../../hooks/useData'
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { FormSelect } from "../../components/FormSelect";
import { ToastContainer } from "react-toastify";

export function UpdateSale(props) {
  const baseUrl = `http://localhost:3001/sales/${props.match.params.id}`;
  const backUrl = "/sales";
  const { successNotify } = useNotify()

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

  return (
    <Card>
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
        <Button color="green" onClick={() => {
          updateData(baseUrl, sale)
          successNotify("Venda alterada com sucesso!", backUrl)
        }}>
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
