import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import ClientTableList from './ClientTableList'
import GlobalPageBar from './GlobalPageBar'
import { ButtonDiv } from './styles/DetailPageStyle'
import { Button, Input } from './styles/FormStyle'
import SubHeading from './styles/SubHeading'

export default function ClientUpdate({ id }) {
    let navigate = useNavigate()
    const params = useParams()

    const [clientDetails, setClientDetails] = useState(null)
    const [name, setName] = useState('')
    const [organisationNr, setOrganisationNr] = useState('')
    const [vatNr, setVatNr] = useState('')
    const [reference, setReference] = useState('')
    const [paymentTerm, setPaymentTerm] = useState('')
    const [website, setWebsite] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    function renderInput(type, value, setValue, placeholder) {
        return (
            <Input
                inputUpdate={true}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }
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

    function handleOnClick(id) {

        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem('js3-examination')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const payload = {
            name: name || undefined,
            organisationNr: organisationNr || undefined,
            vatNr: vatNr || undefined,
            reference: reference || undefined,
            paymentTerm: paymentTerm || undefined,
            website: website || undefined,
            email: email || undefined,
            phoneNumber: phoneNumber || undefined,
        }
        console.log(payload)
        fetch(url, {
            headers: headers,
            method: 'PATCH',
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                setClientDetails(data)
                setName(data.name)
                setOrganisationNr(data.organisationNr)
                setVatNr(data.vatNr)
                setReference(data.reference)
                setPaymentTerm(data.paymentTerm)
                setWebsite(data.website)
                setEmail(data.email)
                setPhoneNumber(data.phoneNumber)
            })
        navigate(-1)
    }

    return (
        <div>
            {clientDetails ? (
                <>
                    <GlobalPageBar text={clientDetails.name} />
                    <SubHeading text={clientDetails.name} />
                    <ClientTableList
                    tableUpdate={true}
                        name={renderInput('text', name, setName, clientDetails.name)}
                        organisationNr={renderInput('text', organisationNr, setOrganisationNr, clientDetails.organisationNr)}
                        vatNr={renderInput('text', vatNr, setVatNr, clientDetails.vatNr)}
                        reference={renderInput('text', reference, setReference, clientDetails.reference)}
                        paymentTerm={renderInput('number', paymentTerm, setPaymentTerm, clientDetails.paymentTerm)}
                        website={renderInput('text', website, setWebsite, clientDetails.website)}
                        email={renderInput('text', email, setEmail, clientDetails.email)}
                        phoneNumber={renderInput('text', phoneNumber, setPhoneNumber, clientDetails.phoneNumber)} />
                </>
            ) : 'Not found'}

            <ButtonDiv>
                <Button onClick={(e) => handleOnClick(clientDetails.id)}>Update Client information</Button>
                <Button><Link to={`/home/${params.id}`}>Back to detail page</Link> </Button>
            </ButtonDiv>
        </div>
    )
}
