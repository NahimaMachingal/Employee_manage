import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './EmployeeForm.css';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        role: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) fetchEmployee();
    }, [id]);

    const fetchEmployee = async () => {
        try {
            const response = await api.get(`employees/${id}/`);
            setFormData(response.data);
        } catch {
            setError('Failed to fetch employee');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await api.put(`employees/${id}/`, formData);
            } else {
                await api.post('employees/', formData);
            }
            navigate('/employees');
        } catch (err) {
            setError('Failed to save employee');
        }
    };

    return (
        <div className="form-page">
            <div className="form-shell">
                {/* Header */}
                <div className="form-header">
                    <div>
                        <h1>{id ? 'Edit Employee' : 'Add Employee'}</h1>
                        <p>Fill in the employee details below</p>
                    </div>
                    <Link to="/employees" className="back-link">
                        ← Back
                    </Link>
                </div>

                {error && <div className="form-error">{error}</div>}

                {/* Form */}
                <form onSubmit={handleSubmit} className="employee-form">
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <label>Department</label>
                            <input
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Engineering"
                            />
                        </div>

                        <div className="input-group">
                            <label>Role</label>
                            <input
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Frontend Developer"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="primary-btn">
                            {id ? 'Update Employee' : 'Create Employee'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeForm;
