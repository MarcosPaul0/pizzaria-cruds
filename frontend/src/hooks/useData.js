import { useEffect, useState } from 'react'
import axios from 'axios'


export function useData(baseUrl) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const dataList = await axios(baseUrl)
            setData(dataList.data)
        }

        getData()
    }, [baseUrl])

    return data
}