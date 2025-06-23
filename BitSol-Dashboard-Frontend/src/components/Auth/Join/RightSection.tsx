import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import IconCard from "./IconCard";
import userPic from '../../../assets/user.svg';
import briefCasePic from '../../../assets/user.svg'

const choices = [{
    path: userPic,
    heading: 'Individual',
    text: 'Personal account to manage all you activities.'
}, {
    path: briefCasePic,
    heading: 'Business',
    text: 'Own or belong to a company, this is for you.'
}];

export default function RightSection(): React.ReactNode {


    return <Grid size={{xs: 12, sm: 7}} p={5}>
        <Stack spacing={10}>
            <Stack width={'100%'} justifyContent={'flex-end'} alignContent={'center'} direction={'row'}>
                <Typography variant="body2" sx={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#8692A6'
                }} >Already Have an account?</Typography><Button sx={{
                    color: '#1565D8',
                    fontWeight: '500'
                }} disableRipple variant="text" >Sign In</Button>
            </Stack>
            <Stack spacing={'2.25rem'} maxWidth={{sm: '70%', xs: '90%'}} pl={{xs: 2, sm: 10}}>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '1.875rem'
                }} variant="h2">Join Us!</Typography>
                <Typography variant="body2" sx={{
                    color: '#8692A6',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem'
                }}>
                    To begin this journey, tell us what type of account you’d be opening.
                </Typography>
                <Box>
                    {choices.map((choice, index) => <IconCard key={index} iconPath={choice.path} heading={choice.heading} text={choice.text} />)}
                </Box>
            </Stack>
        </Stack>
    </Grid>
}