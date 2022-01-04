import React from 'react'
import { useParams } from 'react-router-dom'
import ClientDetails from '../components/ClientDetails'


export default function ClientDetailPage() {
    const params = useParams()
    return (
        <div>
            <ClientDetails id={params.id} />            
        </div>
    )
}
