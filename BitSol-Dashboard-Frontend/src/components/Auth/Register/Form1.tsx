import { Box, Button, FormControl, FormControlLabel, InputAdornment, InputBase, InputLabel, OutlinedInput, styled, Typography } from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';
import googleLogo from '../../../assets/google_logo.svg';
import { useState } from "react";


type FormInputs = {
    fullName: string,
    email: string,
    password: string
    agreement: boolean
};

const CustomInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#F3F6F9',
        border: '1px solid',
        borderColor: 'customGrey.main',
        width: '100%',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),

        fontFamily: [
            theme.typography.fontFamily,
        ].join(','),
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
            borderColor: '#2D3843',
        }),
    },
}));

export default function Form1() {
    const [passwordShow, setPasswordShow] = useState(false);
    const { control, handleSubmit } = useForm<FormInputs>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            agreement: true
        }
    });

    function handleToggleShowClick() {
        setPasswordShow(prevState => !prevState);
    }

    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <Box sx={{
            color: 'customGrey.main'
        }} width={'100%'} display={'flex'} flexDirection={'column'} gap={'1rem'} component={'form'}>
            <Controller
                name="fullName"
                control={control}
                rules={{required: true}}
                render={({ field }) => <FormControl fullWidth variant="standard">
                    <InputLabel shrink htmlFor="fullname-input">
                        Your fullname*
                    </InputLabel>
                    <CustomInput placeholder="Enter your full name"  {...field} id="fullname-input" />
                </FormControl>
                }
            />
            <Controller
                name="email"
                rules={{required: true}}
                control={control}
                render={({ field }) => <FormControl fullWidth variant="standard">
                    <InputLabel shrink htmlFor="email-input">
                        Email address*
                    </InputLabel>
                    <CustomInput type="email" placeholder="Enter email address" {...field} id="email-input" />
                </FormControl>}
            />
            <Controller
                name="password"
                rules={{required: true}}
                control={control}
                render={({ field }) => <FormControl fullWidth variant="standard">
                    <InputLabel shrink htmlFor="password-input">
                        Create password*
                    </InputLabel>
                    <OutlinedInput sx={{
                        marginTop: '1.5rem'
                    }} type={passwordShow ? 'text' : 'password'} id="password-input" placeholder="Enter password" {...field} endAdornment={<InputAdornment position="end">
                        <Button variant="text" sx={{
                            color: 'black',
                        }} onClick={handleToggleShowClick}>{passwordShow ? 'Hide' : 'Show'}</Button>
                    </InputAdornment>} />
                </FormControl>
                }
            />
            <Controller rules={{required: true}} control={control} name="agreement" render={({ field }) => <FormControlLabel control={
                <Checkbox checked={field.value} onChange={field.onChange} inputProps={{ 'aria-label': 'controlled' }} />} label="I agree to terms & conditions" />} />
            <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Register Account</Button>
            <Typography sx={{
                textAlign: 'center'
            }} variant="body2">Or</Typography>
            <Button sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5%'
            }}>
                <Box component={'img'} src={googleLogo} />
                <Box color={'black'} component={'span'}>Register with Google</Box>
            </Button>
        </Box>
    );
};