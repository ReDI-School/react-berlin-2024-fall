import { useId } from "react"

function UserSettings({username, setUsername, theme, setTheme}) {
    const usernameInput = useId()
    const themeInput = useId()
    return <table>
        <tr>
            <td><label htmlFor={usernameInput}>User name</label></td>
            <td><input type="text" id={usernameInput} value={username} onChange={({target: {value}}) => setUsername(value)}></input></td>
        </tr>
        <tr>
            <td><label htmlFor={themeInput}>Theme</label></td>
            <td>
                <select id={themeInput} value={theme} onChange={({target: {value}}) => setTheme(value)}>
                    <option value="dark">Dark theme</option>
                    <option value="light">Light theme</option>
                </select>
            </td>
        </tr>
        
    </table>
}

export default UserSettings