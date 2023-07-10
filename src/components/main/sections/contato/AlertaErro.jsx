import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function AlertaErro() {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {open && (
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }} sx={{ marginTop: '50px' }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%', backgroundColor: '#D4676D' }} >
                        Ocorreu um erro ao enviar o formulário!
                    </Alert>
                </Snackbar>
            )}
        </Stack>
    );
}

