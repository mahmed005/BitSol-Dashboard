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
        ...classes,
      }}
    >
      <AddIcon />
    </IconButton>
  );
}
