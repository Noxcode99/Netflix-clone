import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react";

// later will delete it

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
};

export const AuthContent = createContext(INITIAL_STATE);

export const AuthContentProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContent.Provider 
        value={{
            user:state.user, 
            isFetching:state.isFetching, 
            error: state.error,
        }}
        >
            {children}
        </AuthContent.Provider>
    )
};