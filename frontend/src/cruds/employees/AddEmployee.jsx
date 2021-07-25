import { useState } from 'react';
import { changeHandler, addData } from '../../hooks/useCrud';

import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';

export function AddEmployee() {
  const baseUrl = 'http://localhost:3001/employees';

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
    <main className="main bg-projectGray-25 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
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
            <Button color="yellow" onClick={() => addData(baseUrl, employee, clearHandler)}>
              Confirmar
            </Button>
            <Button color="red" onClick={() => clearHandler()}>
              Limpar
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
