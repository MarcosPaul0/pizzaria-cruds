import { useEffect, useState } from 'react'
import axios from 'axios'

export function useDataDelete(dataModel, baseUrl) {
    const [data, setData] = useState(dataModel)

    useEffect(() => {
        async function getData() {
            const dataList = await axios.get(baseUrl)
            setData(dataList.data)
        }

        getData()
    }, [baseUrl])
    
    return data
}