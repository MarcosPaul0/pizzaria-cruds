import { useHistory } from 'react-router-dom';
import { deleteData } from '../../hooks/useCrud';
import { useDataDelete } from '../../hooks/useDataDelete';

import { Button } from '../../components/Button';
import { FormInput } from '../../components/FormInput';

export function DeleteEmployee(props) {
  const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`;
  const backUrl = '/employees';
  const history = useHistory();

  const employee = useDataDelete(
    {
      name: '',
      cpf: '',
      birth: '',
      admission: '',
    },
    baseUrl
  );

  return (
    <main className="main bg-projectGray-25 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput id="name" name="name" type="text" label="Nome" value={employee.name} disabled />
          <FormInput id="cpf" name="cpf" type="text" label="CPF" value={employee.cpf} disabled />
          <FormInput id="birth" name="birth" type="date" label="Nascimento" value={employee.birth} disabled />
          <FormInput id="admission" name="admission" type="date" label="Admissão" value={employee.admission} disabled />
          <div className="mt-4 flex justify-center">
            <Button color="red" onClick={() => deleteData(baseUrl, backUrl, history)}>
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
