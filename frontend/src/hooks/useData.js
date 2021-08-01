import { useEffect, useState } from 'react'
import axios from 'axios'


export function useData(baseUrl, order, search) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const dataList = await axios(baseUrl)
            dataList.data.sort((x, y) => (x[order] > y[order]) ? 1 : ((y[order] > x[order]) ? -1 : 0))
            if(search) {
                const dataSearchList = dataList.data.filter(data => 
                    Object.values(data)[0].substring(0, search.length) === search || Object.values(data)[1].substring(0, search.length) === search)
                setData(dataSearchList)
            } else {
                setData(dataList.data)
            }
        }
        getData()
    }, [baseUrl, order, search])

    return data
}