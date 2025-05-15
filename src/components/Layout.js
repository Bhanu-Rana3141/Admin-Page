import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';

export default function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}></Route>
            </Routes>
        </>
    )
}
