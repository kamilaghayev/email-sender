import { Button, Container } from "@mui/material"
import { useState } from "react"
import "./App.css"
import ModalForEmail from "../components/modalForEmail"

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
            <ModalForEmail open={open} onClose={handleClose}/>
        </Container>
    )
}

export default App