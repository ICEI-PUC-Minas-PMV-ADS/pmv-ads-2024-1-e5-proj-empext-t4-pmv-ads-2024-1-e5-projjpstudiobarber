import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );

}