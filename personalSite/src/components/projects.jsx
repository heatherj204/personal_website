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
                JavaScript | React.js | REST API | HTML/CSS
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Developed a responsive React.js weather application that allows users to search for locations and view real-time weather information. Integrated a REST API to retrieve and dynamically display current weather conditions based on the user’s search, with a focus on creating a clean and intuitive user experience.
                <p/>
                The application was also deployed and hosted on a subdomain of my personal website, making the project publicly accessible.
                <p/>
                Available <a href="https://weather.heather.network/">here</a>
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

                <Typography variant="h5">
                    TaskHive
                </Typography>

                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    Python | Django REST Framework | REST API
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Responsible for the backend development, building the application’s API using Django REST Framework. Designed and implemented the API endpoints and backend logic needed to support tasks, projects, teams, and user interactions, while ensuring the frontend could communicate reliably with the backend.
                <p/>
                This project gave me valuable hands-on experience with RESTful API development, Django, database management, authentication, and full-stack application architecture, as well as experience collaborating on a larger software project.
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

                <Typography variant="h5">
                    Personal Unix Shell
                </Typography>

                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    C | Linux/Unix | System Programming
                </Typography>
            </Stack>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{ mt: 3, textAlign: 'center' }}
            >
                Designed and implemented a custom Unix shell in C, supporting batch-mode execution, I/O redirection, process creation and execution, and background processing. The project provided hands-on experience with systems programming, process management, and operating system concepts.
                <p/>
                While also producing comprehensive technical documentation, including a user manual and detailed description of the shell’s functionality and implementation.
            </Typography>
            </Box>
        </Box>
    )
}

export default Projects;