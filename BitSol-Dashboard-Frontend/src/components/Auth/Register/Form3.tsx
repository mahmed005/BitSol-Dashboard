import { Box, Button, FormControl, FormControlLabel, InputAdornment, InputBase, InputLabel, OutlinedInput, styled, Typography } from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import LockIcon from '@mui/icons-material/Lock';
import tickIcon from '../../../assets/tick-icon.svg';


type FormInputs = {
    bvn: string
};

export default function Form3() {
    const { control, handleSubmit } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <Box sx={{
            color: 'customGrey.main'
        }} width={'100%'} display={'flex'} flexDirection={'column'} gap={'1rem'} component={'form'}>
            <Controller
                name="bvn"
                control={control}
                rules={{required: true}}
                render={({ field }) => <FormControl fullWidth variant="standard">
                    <Typography mb={1} variant="body2">
                        Bank Verification Number (BVN)
                    </Typography>
                    <OutlinedInput {...field} endAdornment={<InputAdornment position="end" ><Box component={'img'} src={tickIcon} alt="tick-logo" /></InputAdornment>} {...field} id="bvn-input" />
                </FormControl>
                }
            />
            <Button variant="contained" size="large" onClick={handleSubmit(onSubmit)}>Save & Continue</Button>
            <Typography sx={{
                textAlign: 'center'
            }} variant="body2"><LockIcon sx={{
                height: '1rem'
            }} />Your info is safely secured</Typography>
        </Box>
    );
};