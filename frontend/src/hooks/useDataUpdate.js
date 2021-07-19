import { useEffect } from 'react'
import axios from 'axios'

export function useDataUpdate(baseUrl, setData) {
    useEffect(() => {
        async function getData() {
            const data = await axios.get(baseUrl)
            setData(data.data)
        }
        getData()
    }, [baseUrl, setData])
}