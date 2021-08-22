import { useState } from 'react';
import { changeHandler, addData } from '../../hooks/useCrud';
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from '../../components/Button';
import { OutlinedButton } from '../../components/OutlinedButton';
import { FormInput } from '../../components/FormInput';

import { ToastContainer } from 'react-toastify';

export function AddEmployee() {
  const baseUrl = 'http://localhost:3001/employees';
  const backUrl = '/employees'
  const { successNotify } = useNotify()

  const [employee, setEmployee] = useState({
    name: '',
    cpf: '',
    birth: '',
    admission: '',
  });

  function clearHandler() {
    setEmployee({
      name: '',
      cpf: '',
      birth: '',
      admission: '',
    });
  }

  return (
    <Card>
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        placeholder="Informe o nome"
        value={employee.name}
        onChange={(e) => setEmployee(changeHandler(e, employee))}
      />
      <FormInput
        id="cpf"
        name="cpf"
        type="text"
        pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
        label="CPF"
        placeholder="Informe o CPF"
        value={employee.cpf}
        onChange={(e) => setEmployee(changeHandler(e, employee))}
      />
      <FormInput
        id="birth"
        name="birth"
        type="date"
        label="Nascimento"
        value={employee.birth}
        onChange={(e) => setEmployee(changeHandler(e, employee))}
      />
      <FormInput
        id="admission"
        name="admission"
        type="date"
        label="Admissão"
        value={employee.admission}
        onChange={(e) => setEmployee(changeHandler(e, employee))}
      />
      <div className="mt-4 flex justify-center space-x-5">
        <Button color="green" onClick={() => {
          successNotify('Funcionário criado com sucesso!', backUrl)
          addData(baseUrl, employee, clearHandler)
        }}>
          Confirmar
        </Button>
        <OutlinedButton color="projectRed-default" onClick={() => clearHandler()}>
          Limpar
        </OutlinedButton>
        <ToastContainer />
      </div>
    </Card>
  );
}
