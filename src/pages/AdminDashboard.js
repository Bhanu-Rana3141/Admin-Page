import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Stores from '../components/Stores';
import TopPurchasesPlans from '../components/TopPurchasesPlans';
import TopPurchasedCards from '../components/TopPurchasedCards';
import MostUsedTemplates from '../components/MostUsedTemplates';

export default function AdminDashboard() {
    return (
        <>
            <div className='admin-dashboard-parent'>
                <Sidebar />
                <div className='content-parent-container'>
                    <Header />
                    <div className='content-container'>
                        <Dashboard/>
                        <Stores/>
                        <TopPurchasesPlans/>
                        <TopPurchasedCards/>
                        <MostUsedTemplates/>
                    </div>
                </div>
            </div>
        </>
    )
}
