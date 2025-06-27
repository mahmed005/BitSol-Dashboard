import type { Theme } from "@emotion/react";
import { Button, type SxProps } from "@mui/material";

export default function CustomButton({
  text,
  importance,
  classes,
  type,
}: {
  text: string;
  importance: "outlined" | "contained" | "text";
  classes?: SxProps<Theme>;
  type?: "submit";
}) {
  return (
    <Button
      type={type}
      sx={{ ...classes, textTransform: "none" }}
      variant={importance}
    >
      {text}
    </Button>
  );
}
