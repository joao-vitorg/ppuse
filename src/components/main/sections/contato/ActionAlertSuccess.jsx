import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Alert.module.css';




export default function ActionAlertSuccess() {
    
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
                severity="success"
                variant="filled"
                sx={{backgroundColor:'#55AAA7', color:'white'}}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                        sx={{
                            width: '30px', height: '30px',backgroundColor:'#55AAA7'
                        }}

                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                Formulário enviada com sucesso!
            </Alert>
        )}
    </Stack>

    );
}


/*

<Stack sx={{ width: '23%' }} spacing={0}>
            {open && (
                <Alert
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                            sx={{
                                width: '30px', height: '30px'

                            }}

                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            )}
        </Stack>

*/