import { deleteData } from '../../hooks/useCrud';
import { useDataDelete } from '../../hooks/useDataDelete';
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { OutlinedButton } from '../../components/OutlinedButton';
import { FormInput } from '../../components/FormInput';

import { ToastContainer } from 'react-toastify';

export function DeleteEmployee(props) {
  const baseUrl = `http://localhost:3001/employees/${props.match.params.id}`;
  const backUrl = '/employees';
  const { errorNotify } = useNotify()

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
    <Card>
      <FormInput id="name" name="name" type="text" label="Nome" value={employee.name} disabled />
      <FormInput id="cpf" name="cpf" type="text" label="CPF" value={employee.cpf} disabled />
      <FormInput id="birth" name="birth" type="date" label="Nascimento" value={employee.birth} disabled />
      <FormInput id="admission" name="admission" type="date" label="Admissão" value={employee.admission} disabled />
      <div className="mt-4 flex justify-center">
        <OutlinedButton color="projectRed-default" onClick={() => {
          deleteData(baseUrl)
          errorNotify('Usuário excluído!', backUrl)
        }}>
          Excluir
        </OutlinedButton>
        <ToastContainer />
      </div>
    </Card>
  );
}
