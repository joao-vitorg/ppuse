import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function IndicadorProgresso() {
    const [progress, setProgress] = React.useState(0);
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack spacing={2} direction="row">
            {open &&(
                <CircularProgress variant="determinate" value={progress} />
            )}
        </Stack>
    );
}