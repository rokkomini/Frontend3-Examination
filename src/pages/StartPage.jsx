import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalPageBar from '../components/GlobalPageBar'
import { Button, Form, Input } from '../components/styles/FormStyle'



export default function StartPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()


    function handleOnSubmit(e) {
        e.preventDefault()
        const url = 'https://frebi.willandskill.eu/api-token-auth/'
        const payload = { email, password }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                const token = data.token
                localStorage.setItem('js3-examination', token)
                navigate('/home')
            })
    }

    return (
        <div>
            <GlobalPageBar text='Welcome to Login' />
            <Form onSubmit={handleOnSubmit}>
                <Input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                <Button primary={true} type='submit'>Login</Button>
            </Form>
        </div>
    )
}
