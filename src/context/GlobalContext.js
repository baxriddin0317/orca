import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initialState 
const initialState = {
    notes: [
        {id: 1, ism: "baxriddin", text: "shu ishni qilish kere", data: "24/07/2022"},
        {id: 2, ism: "xusniddin", text: "shu ishni qilish kere", data: "24/07/2022"},
        {id: 3, ism: "asilbek", text: "shu ishni qilish kere", data: "24/07/2022"}
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