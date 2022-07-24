import { createContext, useReducer, useState } from "react";
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

    function updateNote(id,note) {
        dispatch({
            type: 'UPDATE_NOTE',
            id: id,
            payload: note
        })
    }

    const [noteEdit, setEditNote] = useState({});
    // edit 
    const editNote = (note) => {
        setEditNote({
            note,
            edit: true
        })
    }

    return (<GlobalContext.Provider value={{
        notes: state.notes,
        noteEdit,
        deletNote,
        addNote,
        updateNote,
        editNote
    }}>
        {children}
    </GlobalContext.Provider>)
}