import { useState } from 'react';
import { changeHandler, updateData } from '../../hooks/useCrud';
import { useDataUpdate } from '../../hooks/useDataUpdate';
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';

import { ToastContainer } from 'react-toastify';

export function UpdateEmployee(props) {
  const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`;
  const backUrl = '/employees';

  const { successNotify } = useNotify()

  const [employee, setEmployee] = useState({
    name: '',
    cpf: '',
    birth: '',
    admission: '',
  });

  useDataUpdate(baseUrl, setEmployee);

  return (
    <Card>
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        value={employee.name}
        onChange={(e) => setEmployee(changeHandler(e, employee))}
      />
      <FormInput
        id="cpf"
        name="cpf"
        type="text"
        label="CPF"
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
      <div className="mt-4 flex justify-center">
        <Button color="green" onClick={() => {
          successNotify('Usuário alterado com sucesso!', backUrl)
          updateData(baseUrl, employee)
        }}>
          Confirmar
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
