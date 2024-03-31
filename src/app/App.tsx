import { Button, Container } from "@mui/material"
import { useState } from "react"
import "./App.css"
import ModalForEmail from "../components/modalForEmail"
import SnackModal from "../hoc/SnackModal/SnackModal"
import EmailSnackBar from "../components/emailSnackbar"

const App = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Container>
            <Button variant='contained' onClick={handleOpen}>open</Button>
            <SnackModal>
                <ModalForEmail open={open} onClose={handleClose}/>
                <EmailSnackBar/>
            </SnackModal>
        </Container>
    )
}

export default App