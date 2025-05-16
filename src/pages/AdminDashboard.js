import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Stores from '../components/Stores';
import TopPurchasesPlans from '../components/TopPurchasesPlans';
import TopPurchasedCards from '../components/TopPurchasedCards';
import MostUsedTemplates from '../components/MostUsedTemplates';

export default function AdminDashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <div className='admin-dashboard-parent'>
                <Sidebar isOpen={isSidebarOpen} onLinkClick={closeSidebar} />
                <div className='content-parent-container'>
                    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div className='content-container p-4'>
                        <Dashboard />
                        <Stores />
                        <TopPurchasesPlans />
                        <TopPurchasedCards />
                        <MostUsedTemplates />
                    </div>
                </div>
            </div>
        </>
    );
}