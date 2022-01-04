import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClientCreate from './ClientCreate'
import { CustomerGrid, List } from './styles/HomePageStyle'
import SubHeading from './styles/SubHeading'


export default function ClientList() {
    const [clientList, setClientList] = useState(null)


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
            headers: headers,
        })
            .then(res => res.json())
            .then(data => setClientList(data.results))
    }


    return (
        <div>
            <CustomerGrid>
                <List>
                <SubHeading text='Clients'/>
                    {clientList && clientList.map(item => {
                        return (
                            <>
                                <li key={item.id}>
                                    <Link key={item.id} to={`/home/${item.id}`} >{item.name}</Link>
                                </li>
                            </>
                        )
                    })}
                </List>
                <ClientCreate onSuccess={fetchData} onClick={fetchData} />
            </CustomerGrid>
        </div >
    )
}
