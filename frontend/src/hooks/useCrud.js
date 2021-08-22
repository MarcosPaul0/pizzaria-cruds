import axios from 'axios';

function changeHandler(e, data) {
  const newData = { ...data };
  newData[e.target.name] = e.target.value;
  return newData;
}

async function addData(baseUrl, data, clearHandler) {
  await axios.post(baseUrl, data);
  clearHandler();
}

async function updateData(baseUrl, data) {
  await axios.put(baseUrl, data);
}

async function deleteData(baseUrl) {
  await axios.delete(baseUrl);
}

export { changeHandler, addData, updateData, deleteData };
