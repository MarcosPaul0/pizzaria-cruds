import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { changeHandler, updateData } from '../../hooks/useCrud';
import { useDataUpdate } from '../../hooks/useDataUpdate';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';

export function UpdateEmployee(props) {
  const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`;
  const backUrl = '/employees';
  const history = useHistory();

  const [employee, setEmployee] = useState({
    name: '',
    cpf: '',
    birth: '',
    admission: '',
  });

  useDataUpdate(baseUrl, setEmployee);

  const notify = () =>
    toast.success('Usuário alterado com sucesso!', {
      position: 'bottom-right',
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
            <Button color="green" onClick={() => updateData(baseUrl, employee, notify)}>
              Confirmar
            </Button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
