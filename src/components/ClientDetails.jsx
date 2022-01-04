import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClientDelete from './ClientDelete'
import ClientTableList from './ClientTableList'
import GlobalPageBar from './GlobalPageBar'
import { ButtonDiv } from './styles/DetailPageStyle'
import { Button } from './styles/FormStyle'



export default function ClientDetails({ id }) {
    const [clientDetails, setClientDetails] = useState({})

    useEffect(() => {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
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
            .then(data => setClientDetails(data))
    }, [id])



    return (
        <div>

            {clientDetails ? (
                <>
                    <GlobalPageBar text={`Client: ${clientDetails.name}`} />
                    <ClientTableList
                        name={clientDetails.name}
                        organisationNr={clientDetails.organisationNr}
                        vatNr={clientDetails.vatNr}
                        reference={clientDetails.reference}
                        paymentTerm={clientDetails.paymentTerm}
                        website={clientDetails.website}
                        email={clientDetails.email}
                        phoneNumber={clientDetails.phoneNumber} />
                </>
            ) : 'Not found'}
            <ButtonDiv>
                <Button><Link key={clientDetails.id} to={`/home/update/${clientDetails.id}`} >Update client</Link></Button>
                <ClientDelete id={clientDetails.id} />
                <Button><Link to='/home'>Home</Link> </Button>
            </ButtonDiv>
        </div>
    )
}
