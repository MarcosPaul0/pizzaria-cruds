import { useState, useContext } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";
import { useData } from '../../hooks/useData'
import { useNotify } from '../../hooks/useNotify'

import { SaleContext } from '../../context/SaleContext'

import { ToastContainer } from "react-toastify";

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { OutlinedButton } from "../../components/OutlinedButton";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";

export function AddSale() {
  const baseUrl = "http://localhost:3001/sales";
  const backUrl = "/sales";
  const { successNotify } = useNotify()
  
  const saleContext = useContext(SaleContext)

  const [sale, setSale] = useState({
    client: "",
    date: "",
    employee: "",
    products: saleContext.sale.products,
    total: saleContext.sale.price,
  });

  function clearHandler() {
    setSale({
      client: "",
      date: "",
      employee: "",
      products: "",
      total: 0,
    });
    saleContext.resetProducts()
  }

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
        type="text"
        label="Produtos"
        disabled
        value={sale.products}
      >
      </FormInput>
      <FormInput
        id="total"
        name="total"
        type="text"
        label="Preço (R$)"
        disabled
        value={sale.total}
      />
      <div className="mt-4 flex justify-center space-x-5">
        <Button
          color="green"
          onClick={() => {
            successNotify("Venda registrada com sucesso!", backUrl)
            addData(baseUrl, sale, clearHandler)
          }}>
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
