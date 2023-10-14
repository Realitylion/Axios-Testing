import { useState, useEffect } from "react";
import Axios from "axios";

function Table() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data.users);
                    setUsers(response.data.users);
                }
                else
                    console.log('Error: ' + response.status);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const listUsers = () => {
        console.log(typeof(users));
        return users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td><img src={user.image} alt={user.username} /></td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>    
                    <td>{user.domain}</td>
                    <td>{user.ip}</td>
                    <td>{user.university}</td>
                </tr>
            )
        })
    }

    return (
        <div className="wrapper">
            <table>
                <tbody>
                    <tr className="head">
                        <td>Sno</td>
                        <td>Profile Pic</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                        <td>E-mail</td>
                        <td>Username</td>
                        <td>Domain</td>
                        <td>IP</td>
                        <td>University</td>
                    </tr>
                    {listUsers()}
                </tbody>
            </table>
        </div>
    )
}

export default Table;