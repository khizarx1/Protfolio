import React, { createContext, useEffect, useReducer } from 'react'
import { supabase } from '../config/supabaseClient'

export const AuthContext = createContext();

const initialState = { isAuthenticated: false, user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { isAuthenticated: true, user: action.payload.user };
        case 'LOGOUT':
            return { isAuthenticated: false, user: null };
        default:
            return state;
    }
};

export default function AuthContextProdvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let mounted = true;

        supabase.auth.getSession().then(({ data }) => {
            if (!mounted) return;
            const user = data.session?.user ?? null;
            if (user) {
                dispatch({ type: 'LOGIN', payload: { user } });
            }
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            const user = session?.user ?? null;
            if (user) {
                dispatch({ type: 'LOGIN', payload: { user } });
            } else {
                dispatch({ type: 'LOGOUT' });
            }
        });

        // cleanup on unmount
        return () => {
            mounted = false;
            listener?.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}