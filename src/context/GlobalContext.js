import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initialState 
const initialState = {
    notes: [
        
    ]
}

// create context 
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deletNote(id) {
        dispatch({
            type: 'DELETE_NOTE',
            payload: id
        })
    }

    function addNote(note) {
        dispatch({
            type: 'ADD_NOTE',
            payload: note
        })
    }

    return (<GlobalContext.Provider value={{
        notes: state.notes,
        deletNote,
        addNote
    }}>
        {children}
    </GlobalContext.Provider>)
}