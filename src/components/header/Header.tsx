import { useState } from "react"

import SnackModal from "../../hoc/SnackModal"
import ModalForEmail from "../modalForEmail"
import EmailSnackBar from "../emailSnackbar"

import { Button, Container, Typography } from "@mui/material"

import logo from "../../assets/email.png"
import "./header.css"
const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <header className="header">
            <Container sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                py: 2
            }}
            >
                <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <img src={logo} alt="logo" width={30} height={30}/> @sender
                </Typography>
                <Button variant='text' onClick={handleOpen}>
                    send
                    
                </Button>
                <SnackModal>
                    <ModalForEmail open={open} onClose={handleClose}/>
                    <EmailSnackBar/>
                </SnackModal>
            </Container>
        </header>
    )
}

export default Header