import React from 'react'
import { Table } from './styles/DetailPageStyle'


export default function ClientTableList({ name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber }) {
    return (
        <div>
            <Table>
                <tr>
                    <th>Client name:</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Org.nr:</th>
                    <td>{organisationNr}</td>
                </tr>
                <tr>
                    <th>Vat nr:</th>
                    <td>{vatNr}</td>
                </tr>
                <tr>
                    <th>Reference (contact person):</th>
                    <td>{reference}</td>
                </tr>
                <tr>
                    <th>Payment terms:</th>
                    <td>{paymentTerm}</td>
                </tr>
                <tr>
                    <th>Website:</th>
                    <td>{website}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{email}</td>
                </tr>
                <tr>
                    <th>Phone number:</th>
                    <td>{phoneNumber}</td>
                </tr>
            </Table>
           
        </div>
    )
}
