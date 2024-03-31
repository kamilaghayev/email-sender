import { Snackbar, SnackbarCloseReason } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { SnackContext } from '../../hoc/SnackModal/SnackModal';

const StyledSnackbar = styled(Snackbar)`
  position: fixed;
  z-index: 5500;
  display: flex;
  bottom: 16px;
  right: 16px;
  max-width: 560px;
  min-width: 300px;
`;


const SnackbarContent = styled('div')(
    ({ theme }) => `
    display: flex;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === 'dark'
            ? `0 2px 16px rgba(0,0,0, 0.5)`
            : `0 2px 16px ${grey[200]}`
        };
    padding: 0.75rem;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
  
    & .snackbar-message {
      flex: 1 1 0%;
      max-width: 100%;
    }
  
    & .snackbar-title {
      margin: 0;
      line-height: 1.5rem;
      margin-right: 0.5rem;
    }
  
    & .snackbar-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
    }
  
    & .snackbar-close-icon {
      cursor: pointer;
      flex-shrink: 0;
      padding: 2px;
      border-radius: 4px;
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      }
    }
    `,
);



const EmailSnackBar = () => {
    const { open, closeSnackModal  } = useContext(SnackContext);
    
    const handleClose = (_: any, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnackModal();
    };


    return (
        <StyledSnackbar
            autoHideDuration={5000}
            open={open}
            onClose={handleClose}
        >
            <div>
                <SnackbarContent>
                    <div className="snackbar-message">
                        <p className="snackbar-title">Email sent</p>
                        <p className="snackbar-description">
                            Message was sent to the.
                        </p>
                    </div>
                    <CloseIcon onClick={handleClose} className="snackbar-close-icon" />
                </SnackbarContent>
            </div>
        </StyledSnackbar>
    )
}

export default EmailSnackBar