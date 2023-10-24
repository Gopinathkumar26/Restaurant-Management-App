import { useState, createContext, useContext } from "react";

//Authentication
const AuthContext = createContext({username:'', phonenumber:''})

export const AuthProvider = ({children}) => {
    //const initialValues = {username:'', phonenumber:''}
    const [username, setUsername] = useState(null)
    const [phonenumber, setPhonenumber] = useState(null)
    //const [formValues, setFormValues] = useState(initialValues)

    const login = (username, phonenumber) => {
        setUsername(username)
        setPhonenumber(phonenumber)
    }

    const logout = () => {
        setUsername(null)
        setPhonenumber(null)
    }

    return (
        <AuthContext.Provider value={{username, phonenumber, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}