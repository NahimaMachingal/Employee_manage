import React, { useState, useEffect } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [filters, setFilters] = useState({ department: '', role: '' });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchEmployees();
    }, [page, filters]);

    const fetchEmployees = async () => {
        try {
            const params = { page, ...filters };
            if (!params.department) delete params.department;
            if (!params.role) delete params.role;

            const response = await api.get('employees/', { params });
            setEmployees(response.data.results);
            setTotalPages(Math.ceil(response.data.count / 10));
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            await api.delete(`employees/${id}/`);
            fetchEmployees();
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        setPage(1);
    };

    return (
        <div className="employee-page">
            {/* Top Toolbar */}
            <div className="toolbar">
                <div>
                    <h1>Employees</h1>
                    <p className="subtitle">Manage your organization’s employees</p>
                </div>

                <Link to="/employees/new" className="primary-btn">
                    + Add Employee
                </Link>
            </div>

            {/* Filters */}
            <div className="filter-bar">
                <input
                    name="department"
                    placeholder="Department"
                    value={filters.department}
                    onChange={handleFilterChange}
                />
                <input
                    name="role"
                    placeholder="Role"
                    value={filters.role}
                    onChange={handleFilterChange}
                />
            </div>

            {/* Table */}
            <div className="table-wrapper">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th className="actions-col">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td className="name-cell">{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department}</td>
                                <td>
                                    <span className="role-pill">{emp.role}</span>
                                </td>
                                <td className="actions-col">
                                    <Link to={`/employees/${emp.id}`} className="link-btn">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(emp.id)}
                                        className="danger-btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {employees.length === 0 && (
                            <tr>
                                <td colSpan="5" className="empty">
                                    No employees found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>

                <span>
                    Page <strong>{page}</strong> of {totalPages}
                </span>

                <button
                    disabled={page >= totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default EmployeeList;
