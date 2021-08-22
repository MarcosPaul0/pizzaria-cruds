import { deleteData } from "../../hooks/useCrud";
import { useDataDelete } from "../../hooks/useDataDelete";
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { FormTextArea } from "../../components/FormTextArea";

import { ToastContainer } from 'react-toastify';

export function DeleteAccompaniment(props) {
  const baseUrl = `http://localhost:3001/accompaniments/${props.match.params.id}`;
  const backUrl = "/accompaniments";
  const { errorNotify } = useNotify()

  const accompaniment = useDataDelete(
    {
      name: "",
      description: "",
      price: 0,
    },
    baseUrl
  );

  return (
    <Card>
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        value={accompaniment.name}
        disabled
      />
      <FormTextArea
        id="description"
        name="description"
        type="text"
        label="Descrição"
        value={accompaniment.description}
        disabled
      />
      <FormInput
        id="price"
        name="price"
        type="text"
        label="Preço"
        value={accompaniment.price}
        disabled
      />
      <div className="mt-4 flex justify-center">
        <Button
          color="red"
          onClick={() => {
            errorNotify('Acompanhamento excluído!', backUrl)
            deleteData(baseUrl)
          }}
        >
          Excluir
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
