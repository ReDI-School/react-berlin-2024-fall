// Lesson 08 - React Router
// First things first, to install react-router-dom, run the following command in your terminal:
//
// npm install react-router-dom
//
// If you are already in a project where react-router-dom was added to package.json, you only need to run `npm install`.
//
// React Router is a collection of navigational components that compose declaratively with your application. It allows you to create a single-page application with navigation without the page refreshing as the user navigates.

// React Router has three primary components:
// BrowserRouter: A router that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
// Route: A component that renders some UI when its path matches the current URL.
// NavLink: A component that allows the user to navigate to a different route.

// Let's create a simple example to demonstrate how to use React Router.
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// notice the import of BrowserRouter with a renamed alias Router

import Home from "./Lesson8Home";
import About from "./Lesson8About";
import Users, { User } from "./Lesson8Users";

export default function Lesson8Router() {
    return <>
        {/* [x] Task 1: create the router component and the navigation bar */}
        {/* [x] Task 2: create routes and navigation items for Home, About and our Users directory */}
        {/* [x] Task 3: create the Home, About and Users routes */}
        {/* [x] Task 4: create the route to get a specific user from our Users directory */}
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<User />} />
                <Route path="*" element={<>
                    <h1>Uh-oh! Path not found</h1>
                    <img src="https://media.giphy.com/media/3o7TKz9b4vVv8fjJQc/giphy.gif" alt="404" />
                    <div><NavLink to="/">Back to safety</NavLink></div>
                </>} />
            </Routes>
        </Router>
    </>
}