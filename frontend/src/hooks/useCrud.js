import axios from 'axios';

function validations(data) {
  Object.values(data).forEach((value) => {
    if (!value) {
      console.log('Campo não preenchido');
    }
  });

  if (data.price) {
    //Validação preço
    console.log(data.price.split('.'));
    if (
      data.price.split('.')[1] &&
      (data.price < 0 || data.price.split('.')[1].length > 2 || data.price.split(',')[1].length > 2)
    ) {
      console.log('Preço inválido');
    } else if (data.price < 0) {
      console.log('Preço inválido');
    }
  }

  if (data.cpf) {
    //Validação cpf
    const regex = /[a-z]/;
    if (data.cpf.length < 11 || data.cpf.length > 11 || regex.test(data.cpf.toLowerCase())) {
      console.log('CPF inválido');
    }
  }
}

function changeHandler(e, data) {
  const newData = { ...data };
  newData[e.target.name] = e.target.value;
  return newData;
}

async function addData(baseUrl, data, clearHandler, notify) {
  validations(data);
  await axios.post(baseUrl, data);
  clearHandler();

  notify();
}

async function updateData(baseUrl, data, notify) {
  validations(data);
  await axios.put(baseUrl, data);

  notify();
}

async function deleteData(baseUrl, notify) {
  await axios.delete(baseUrl);
  notify();
}

export { changeHandler, addData, updateData, deleteData };
