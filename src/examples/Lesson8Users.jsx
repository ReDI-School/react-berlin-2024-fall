// Lesson 08 - React Router
// our Users page, along with a User component to display a specific user

import { Link, useParams } from "react-router-dom";

const USERS = [
    { id: 1, name: "Tiago" },
    { id: 2, name: "Sofia" },
    { id: 3, name: "Fábio" }
];

export function User() {
    const { userId } = useParams();
    const {name, id} = USERS.find((user) => user.id === parseInt(userId));
    return <>
        <h1>{name}</h1>
        <p>User ID: {id}</p>
        <Link to="/users">Back to users</Link>
    </>
}


export default function Lesson8Users() {
    return <>
        <h1>Users directory</h1>
        <ul>
            {USERS.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    </>
}