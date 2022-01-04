import React, { useState, useEffect } from 'react'
import GlobalPageBar from './GlobalPageBar'

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
                <GlobalPageBar text={`Welcome back ${myData.firstName}!`} />
            )}
        </div>

    )
}
