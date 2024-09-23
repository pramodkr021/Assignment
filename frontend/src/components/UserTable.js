import React, { useState, useEffect } from "react";
import '../styles/UserTable.css';
import UserForm from "./UserForm";

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    function handleUserAdded(newUser){
      setUsers(prev =>([...prev, newUser]))
    }

    return (
        <div className="table-container">
          <UserForm onUserAdded={handleUserAdded}/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="no-users" colSpan="3">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;