import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Projects() {
    return(
        <Box
        sx={{display: 'flex',
            gap: 10,
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <Box
            sx={{
                width: '25%',
                maxWidth: '600px',
                borderRadius: 3,
                bgcolor: '#5a74748e',
                p: 3,
                boxShadow: 3,
                backdropFilter: 'blur(10px)',
            }}
            >

            {/* Top section (avatar + name) */}
            <Stack direction="column" spacing={2} alignItems="center">
                <Typography variant="h5">
                    Simple Weather App
                </Typography>

                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                Computer Science Student
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor womp womp in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            </Box>

            <Box
            sx={{
                width: '25%',
                maxWidth: '600px',
                borderRadius: 3,
                bgcolor: '#5a74748e',
                p: 3,
                boxShadow: 3,
                backdropFilter: 'blur(10px)',
            }}
            >
            {/* Top section (avatar + name) */}
            <Stack direction="column" spacing={2} alignItems="center">
                {/* <Avatar
                alt="Heather"
                src="/avatar.png" // replace with your image
                sx={{ width: 80, height: 80 }}
                /> */}

                <Typography variant="h5">
                    TaskHive
                </Typography>

                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    Backend development of productivity web app
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor womp womp in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            </Box>

            <Box
            sx={{
                width: '25%',
                maxWidth: '600px',
                borderRadius: 3,
                bgcolor: '#5a74748e',
                p: 3,
                boxShadow: 3,
                backdropFilter: 'blur(10px)',
            }}
            >
            {/* Top section (avatar + name) */}
            <Stack direction="column" spacing={2} alignItems="center">
                {/* <Avatar
                alt="Heather"
                src="/avatar.png" // replace with your image
                sx={{ width: 80, height: 80 }}
                /> */}

                <Typography variant="h5">
                    TaskHive
                </Typography>

                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    Backend development of productivity web app
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor womp womp in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            </Box>
        </Box>
    )
}

export default Projects;