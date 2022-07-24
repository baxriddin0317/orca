export default (state, action) => {
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
        default:
            return state;
    }
}