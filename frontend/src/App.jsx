import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import ProtectedRoute from './components/ProtectedRoute';

function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="/employees" element={<ProtectedRoute><EmployeeList /></ProtectedRoute>} />
                <Route path="/employees/new" element={<ProtectedRoute><EmployeeForm /></ProtectedRoute>} />
                <Route path="/employees/:id" element={<ProtectedRoute><EmployeeForm /></ProtectedRoute>} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
