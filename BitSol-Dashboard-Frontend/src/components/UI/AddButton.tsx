import { IconButton, type SxProps, type Theme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({
  classes,
}: {
  classes: SxProps<Theme> | undefined;
}) {
  return (
    <IconButton
      sx={{
        "&:hover": {
          backgroundColor: "primary.main",
        },
        ...classes,
        color: "white",
        backgroundColor: "primary.main",
      }}
    >
      <AddIcon />
    </IconButton>
  );
}
