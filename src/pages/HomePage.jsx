import React from 'react'
import UserInfo from '../components/UserInfo'
import UserInfo2 from '../components/UserInfo2'
import ClientList from '../components/ClientList';
import { HomeGrid } from '../components/styles/HomePageStyle';




export default function HomePage() {
    return (
        <div>
            <UserInfo />
            <HomeGrid>
                <UserInfo2 />
                <ClientList />
            </HomeGrid>


        </div>
    )
}
