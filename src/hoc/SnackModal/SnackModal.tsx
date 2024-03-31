import { ReactNode, createContext, useState } from "react"

export const SnackContext = createContext({
    open: false,
    openSnackModal: () => {},
    closeSnackModal: () => {},
})

interface SnackModalProps {
    children: ReactNode
}
const SnackModal = ({children}: SnackModalProps) => {
    const [open, setOpen] = useState(false);
    
    const openSnackModal = () => setOpen(true);

    const closeSnackModal = () => setOpen(false);

    return (
        <SnackContext.Provider value={{open: open, openSnackModal, closeSnackModal}}>
            {children}
        </SnackContext.Provider>
    )
}

export default SnackModal