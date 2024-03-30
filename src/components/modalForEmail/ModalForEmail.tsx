import { Box, Modal } from "@mui/material"
import EmailForm from "../emailForm";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean,
    onClose: () => void
}
const ModalForEmail = ({open, onClose}: ModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{...style, width: '300px'}}>
                <EmailForm/>
            </Box>
        </Modal>
    )
}

export default ModalForEmail