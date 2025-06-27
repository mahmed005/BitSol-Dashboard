import { FormControl, InputBase, InputLabel, styled } from "@mui/material";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    color: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: theme.palette.customGrey.main,
    fontSize: 16,
    width: "auto",
    color: "black",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

export default function Input<T extends FieldValues>({
  label,
  placeholder,
  register,
  name,
}: {
  label: string;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}) {
  return (
    <FormControl variant="standard">
      <InputLabel
        sx={{
          color: "black",
        }}
        shrink
        htmlFor={name}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        {...register(name)}
        sx={{
          width: "100%",
        }}
        placeholder={placeholder}
        id={name}
      />
    </FormControl>
  );
}
