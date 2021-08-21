import { useHistory } from 'react-router-dom';
import { deleteData } from '../../hooks/useCrud';
import { useDataDelete } from '../../hooks/useDataDelete';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card } from '../../components/Card' 
import { OutlinedButton } from '../../components/OutlinedButton';
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

  const notify = () =>
    toast.error('Usuário excluído!', {
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
    <Card>
      <FormInput id="name" name="name" type="text" label="Nome" value={employee.name} disabled />
      <FormInput id="cpf" name="cpf" type="text" label="CPF" value={employee.cpf} disabled />
      <FormInput id="birth" name="birth" type="date" label="Nascimento" value={employee.birth} disabled />
      <FormInput id="admission" name="admission" type="date" label="Admissão" value={employee.admission} disabled />
      <div className="mt-4 flex justify-center">
        {/* <Button color="red" onClick={() => deleteData(baseUrl, backUrl, history)}>
          Excluir
        </Button> */}
        <OutlinedButton color="projectRed-default" onClick={() => deleteData(baseUrl, notify)}>
          Excluir
        </OutlinedButton>
        <ToastContainer />
      </div>
    </Card>
  );
}
