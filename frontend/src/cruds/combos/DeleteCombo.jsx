import { deleteData } from "../../hooks/useCrud";
import { useDataDelete } from "../../hooks/useDataDelete";
import { useNotify } from '../../hooks/useNotify'

import { Card } from '../../components/Card' 
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { ToastContainer } from "react-toastify";

export function DeleteCombo(props) {
  const baseUrl = `http://localhost:3001/combos/${props.match.params.id}`;
  const backUrl = "/combos";
  const { errorNotify } = useNotify()

  const combo = useDataDelete(
    {
      name: "",
      products: "",
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
        value={combo.name}
        disabled
      />
      <FormInput
        id="products"
        name="products"
        type="text"
        label="Produtos"
        value={combo.products}
        disabled
      />
      <FormInput
        id="price"
        name="price"
        type="text"
        label="Preço"
        value={combo.price}
        disabled
      />
      <div className="mt-4 flex justify-center">
        <Button color="red" onClick={() => {
          deleteData(baseUrl)
          errorNotify("Combo excluído!", backUrl)
        }}>
          Excluir
        </Button>
        <ToastContainer />
      </div>
    </Card>
  );
}
