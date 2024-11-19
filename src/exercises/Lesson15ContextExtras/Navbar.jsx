import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useCallback } from "react"

// all these props being passed around all like that look clumsy, don't they?

function Navbar({loggedIn, setLoggedIn, username, setUsername, theme, setTheme}) {

    const logInCallback = useCallback(()=>{
        setLoggedIn(true)
        setUsername("ReDI Student")
    }, [setLoggedIn, setUsername])

    // let's simulate a little delay in logging in.
    const logIn = () => setTimeout(logInCallback, 1000);

    return <div className={styles.Navbar}>
        <table>
            <tr>
                <td><h2>Food Stall</h2></td>
                <td>
                {theme === 'light' ?
                    <button onClick={() => setTheme('dark')}>☀️</button> :
                    <button onClick={() => setTheme('light')}>🌙</button>}

                </td>
                <td>{loggedIn ? <>
                    <div>Welcome, {username}</div>
                    <button onClick={()=>setLoggedIn(false)}>Log out</button>
                    <NavLink to="/settings">Settings</NavLink>
                </> : <>
                    <div>Please log in</div>
                    <button onClick={logIn}>Log in</button>
                </>}
                </td>
            </tr>
        </table>
    </div>
}
export default Navbar;