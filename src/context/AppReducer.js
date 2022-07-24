function AppReducer (state, action) {
    switch(action.type) {
        case 'DELETE_NOTE':
            return{
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case 'ADD_NOTE':
            return{
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case 'UPDATE_NOTE':
            return{
                ...state,
                notes: state.notes.map(note => note.id === action.id ? {...note, ...action.payload} : note)
            }            
        default:
            return state;
    }
}

export default AppReducer;