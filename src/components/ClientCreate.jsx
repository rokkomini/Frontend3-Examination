import React, { useState } from 'react'
import { Button, Form, Input } from './styles/FormStyle'
import SubHeading from './styles/SubHeading'
import styled from 'styled-components'

const Span = styled.span`
  font-size: 13px;
  color: red;
  `

export default function ClientCreate(props) {

    const [name, setName] = useState('')
    const [organisationNr, setOrganisationNr] = useState('')
    const [vatNr, setVatNr] = useState('')
    const [reference, setReference] = useState('')
    const [paymentTerm, setPaymentTerm] = useState('')
    const [website, setWebsite] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [error, setError] = useState('')

    function renderInput(type, value, setValue, placeholder) {
        return (
            <Input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function postNewClient() {
        const url = 'https://frebi.willandskill.eu/api/v1/customers'
        const payload = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber
        },
            token = localStorage.getItem('js3-examination')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => props.onSuccess())
    }


    function handleOnSubmit(e) {
        if (validateVat()) {
            e.preventDefault()
            postNewClient()
            clearInput()
            props.onClick()
            setError('')
        }
    }

    function validateVat() {
        if (!vatNr.match(/^(SE)?[0-9]{12}$/)) {
            setError(`${vatNr} is not a valid VAT number.`)
            return false
        }

        return true
    }

    function clearInput() {
        setName('')
        setOrganisationNr('')
        setVatNr('')
        setReference('')
        setPaymentTerm('')
        setWebsite('')
        setEmail('')
        setPhoneNumber('')
    }

    return (
        <div>

            <Form className='customerForm'>
                <SubHeading text='Add new client' />
                {renderInput('text', name, setName, 'Company name')}
                {renderInput('text', organisationNr, setOrganisationNr, 'Company ID')}
                <Span>
                    {error}
                </Span>
                {renderInput('text', vatNr, setVatNr, 'Vat number')}
                {renderInput('text', reference, setReference, 'Company reference')}
                {renderInput('number', paymentTerm, setPaymentTerm, 'Payment terms')}
                {renderInput('text', website, setWebsite, 'Website')}
                {renderInput('text', email, setEmail, 'Email')}
                {renderInput('text', phoneNumber, setPhoneNumber, 'Phone number')}
                <Button type='button' onClick={handleOnSubmit}>Submit new client</Button>
            </Form>


        </div>
    )
}
