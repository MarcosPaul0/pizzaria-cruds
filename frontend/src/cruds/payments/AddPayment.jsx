import { useState, useContext } from "react";
import { changeHandler, addData } from "../../hooks/useCrud";
import { useData } from "../../hooks/useData";
import { useNotify } from '../../hooks/useNotify'

import { SaleContext } from '../../context/SaleContext'

import { Button } from "../../components/Button";
import { Card } from '../../components/Card';
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";

import { ToastContainer } from "react-toastify";

export function AddPayment() {
  const baseUrl = "http://localhost:3001/payments";
  const backUrl = "/payments";

  const { successNotify } = useNotify()
  const saleContext = useContext(SaleContext)

  const [payment, setPayment] = useState({
    client: saleContext.sale.client,
    date: "",
    employee: "",
    amount: saleContext.sale.price,
  });

  function clearHandler() {
    setPayment({
      client: "",
      date: "",
      employee: "",
      amount: 0,
    });
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
        {employeeOptions}
      </FormSelect>
      <FormInput
        id="amount"
        name="amount"
        type="number"
        label="Montante"
        value={payment.amount}
        onChange={(e) => setPayment(changeHandler(e, payment))}
      />
      <div className="mt-4 flex justify-center space-x-5">
        <Button
          color="green"
          onClick={() => {
            addData(baseUrl, payment, clearHandler)
            successNotify("Pagamento registrado com sucesso!", backUrl)
          }}
        >
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
