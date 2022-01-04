import React, { useState, useEffect } from 'react'
import { Table } from './styles/DetailPageStyle'
import SubHeading from './styles/SubHeading'

export default function UserInfo() {
    const [myData, setMyData] = useState(null)


    useEffect(() => {
        const url = 'https://frebi.willandskill.eu/api/v1/me'
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
            .then(data => {
                setMyData(data)
            })
    }, [])

    return (
        <div>
            {myData && (
                <>
                <SubHeading text='Your info'/>
                
                    <Table userTable={true}>
                        <tr> 
                        <th>Name</th>
                        <td>{myData.firstName} {myData.lastName}</td>
                        </tr>
                        <tr>
                            <th>
                                Email
                            </th>
                            <td>
                                {myData.email}
                            </td>
                        </tr>
                    </Table>
                
                </>
            )}
        </div>

    )
}
