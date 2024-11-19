// Lesson 15 - Sharing data with Context
// Let's make an awesome user admin page with useContext

import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import UserSettings from './UserSettings'
import './Main.css'
import dishes from '../../preject/mocks/dishes.json'
import Dishes from './Dishes'

// [ ] Task 1: Let's move our state to something that doesn't need drilling down props
//             we kinda learned how to do this in this session
//   [ ] Subtask 1: Where do we put our context so that we can use in all components?
//                  One hint that I can tell: make it somewhere where all the components can see
//   [ ] Subtask 2: What do we want to place in our context?
//
// [ ] Task 2: Let's add a user cart for our dishes, but only allow the user to check

function OurSpiffyUserPage() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [theme, setTheme] = useState("light")


    return <div className={theme}>
        <Router>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
                username={username} setUsername={setUsername}
                theme={theme} setTheme={setTheme} />
        <Routes>
            <Route path="/" element={<Dishes dishes={dishes} />} />
            {/* this will conditionally log in based on whether we're logged in or not */}
            <Route path="/settings" element={
                loggedIn ?
                <UserSettings username={username} setUsername={setUsername}
                              theme={theme} setTheme={setTheme} /> :
                <><h3>Nothing to see here, move along</h3>
                <Link to="/">Go back home</Link></>} />
            
        </Routes>
    </Router>
    </div>
}

export default OurSpiffyUserPage