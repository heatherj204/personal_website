import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Building(){
return (
        <Box
    sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
    }}
    >
    <Box
        sx={{
        width: '90%',
        maxWidth: '650px',
        borderRadius: 3,
        bgcolor: '#5a74748e',
        p: 3,
        boxShadow: 3,
        backdropFilter: 'blur(10px)',
        }}
    >
        <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h5">
            Under Construction!
        </Typography>
        </Stack>

        <Typography
        variant="body1"
        sx={{ mt: 3, textAlign: 'center' }}
        >
        Page under construction please check back soon!
        </Typography>
    </Box>
    </Box>
    );
}