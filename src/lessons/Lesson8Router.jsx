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

import Home from "./Lesson8Home";
import About from "./Lesson8About";
import Users, { User } from "./Lesson8Users";

export default function Lesson8Router() {
    return <>
        {/* [ ] Task 1: create the router component and the navigation bar */}
        {/* [ ] Task 2: create routes and navigation items for Home, About and our Users directory */}
        {/* [ ] Task 3: create the Home, About and Users routes */}
        {/* [ ] Task 4: create the route to get a specific user from our Users directory */}
        
        <h1>Replace me!</h1>
    </>
}