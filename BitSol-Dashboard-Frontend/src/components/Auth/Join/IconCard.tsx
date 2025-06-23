import { Box, Card, CardMedia, Typography } from "@mui/material"

export default function IconCard({iconPath, heading, text} : {iconPath: string, heading: string, text: string}) : React.ReactNode {
    return <Card sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: '1.75rem',
        paddingY: '1.625rem',
        gap: '1.75rem',
        boxShadow: 'none'
    }}>
        <CardMedia component={'img'} src={iconPath} sx={{
            height: '3.25rem',
            width: '3.25rem'
        }} />
        <Box>
            <Typography sx={{
                fontSize: '1rem',
                lineHeight: '100%',
                fontWeight: '500'
            }} variant="h3">{heading}</Typography>
            <Typography sx={{
                fontSize: '0.875rem',
                color: '#8692A6'
            }} variant="body1">{text}</Typography>
        </Box>
    </Card>
}