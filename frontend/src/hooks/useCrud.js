import axios from 'axios';

function changeHandler(e, data) {
  const newData = { ...data };
  newData[e.target.name] = e.target.value;
  return newData;
}

async function addData(baseUrl, data, clearHandler, notify) {
  await axios.post(baseUrl, data);
  clearHandler();

  notify();
}

async function updateData(baseUrl, data, notify) {
  await axios.put(baseUrl, data);

  notify();
}

async function deleteData(baseUrl, notify) {
  await axios.delete(baseUrl);
  notify();
}

export { changeHandler, addData, updateData, deleteData };
