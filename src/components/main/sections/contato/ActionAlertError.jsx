import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Alert.module.css';

export default function ActionAlertError(){
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };
    
    /*

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 5000); 

        return () => clearTimeout(timer); 
    }, []);

    */

    return (
        <Stack  spacing={0}  className={styles.stack} >
        {open && (
            <Alert
                severity="error"
                variant="filled"
                sx={{backgroundColor:'#D4676D', color:'white'}}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                        sx={{
                            width: '30px', height: '30px',backgroundColor:'#D4676D'
                        }}

                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                Ocorreu um erro ao enviar o formulário
            </Alert>
        )}
    </Stack>

    );
}