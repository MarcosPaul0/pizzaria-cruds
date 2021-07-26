import axios from 'axios'

function validations(data) {
    Object.values(data).forEach(value => {
        if(!value) {
            console.log('Campo não preenchido')
        }
    })

    if(data.price) {
        //Validação preço
        if(data.price < 0 || data.price.split('.')[1].length > 2 || data.price.split(',')[1].length > 2) {
            console.log('Preço inválido')
        }
    }

    if(data.cpf) {
        //Validação cpf
        const regex = /[a-z]/
        if(data.cpf.length < 11 || data.cpf.length > 11 || regex.test(data.cpf.toLowerCase()) ) {
            console.log('CPF inválido')
        }
    }


}

function changeHandler(e, data) {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    return newData
}

async function addData(baseUrl, data, clearHandler) {
    validations(data)
    await axios.post(baseUrl, data)
    clearHandler()
}

async function updateData(baseUrl, data, comeBack, history) {
    validations(data)
    await axios.put(baseUrl, data)
    history.push(comeBack)
}

async function deleteData(baseUrl, comeBack, history) {
    await axios.delete(baseUrl)
    history.push(comeBack)
}

export { changeHandler, addData, updateData, deleteData }