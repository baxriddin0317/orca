import { useState, createContext } from "react";

// create context
const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    
    const [ openModal, setOpenModal ] = useState(false);

    return <ModalContext.Provider value={{
        openModal,
        setOpenModal
    }}>
        {children}
    </ModalContext.Provider>
}

export default ModalContext;