import React from 'react'
import { useParams } from 'react-router-dom'
import ClientUpdate from '../components/ClientUpdate'

export default function ClientUpdateDetailPage() {
    const params = useParams()
    return (
        <div>

            <ClientUpdate id={params.id} />

        </div>
    )
}
