import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './styles/FormStyle'

export default function ClientDelete(id) {
    const [clientList, setClientList] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        const token = localStorage.getItem('js3-examination')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            method: 'GET',
            headers,
        })
            .then(res => res.json())
            .then(data => setClientList(data.results))
    }

    function handleOnDelete({ id }) {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem('js3-examination')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        fetch(url, {
            headers: headers,
            method: 'DELETE'
        })
            .then((res) => fetchData())
        navigate('/home')
    }
    return (
        <>
            <Button onClick={(e) => handleOnDelete(id)}>Delete client</Button>
        </>

    )
}
