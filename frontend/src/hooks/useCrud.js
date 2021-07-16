import axios from 'axios'

function changeHandler(e, data) {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    return newData
}

async function addData(baseUrl, data, clearHandler) {
    await axios.post(baseUrl, data)
    clearHandler()
}

async function updateData(baseUrl, data, comeBack, history) {
    await axios.put(`${baseUrl}`, data)
    history.push(comeBack)
}

async function deleteData(baseUrl, comeBack, history) {
    await axios.delete(`${baseUrl}`)
    history.push(comeBack)
}

export { changeHandler, addData, updateData, deleteData }