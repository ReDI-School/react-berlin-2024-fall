// Lesson 08 - React Router
// our Users page, along with a User component to display a specific user

import { Link, useParams } from "react-router-dom";

const USERS = [
    { id: 1, name: "Tiago" },
    { id: 2, name: "Sofia" },
    { id: 3, name: "Fábio" }
];

export function User() {
    {/* [ ] Task 6: get the user ID from the URL */}
    const {name, id} = USERS.find((user) => user.id === 1);
    return <>
        <h1>{name}</h1>
        <p>User ID: {id}</p>
        {/* [ ] Task 7: add a link to go back to the users directory */}
    </>
}


export default function Lesson8Users() {
    return <>
        <h1>Users directory</h1>
        <ul>
            {USERS.map((user) => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    {/* [ ] Task 5: add a link to the user's profile */}
                </li>
            ))}
        </ul>
    </>
}