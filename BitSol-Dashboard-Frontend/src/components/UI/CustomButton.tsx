import { Button, type SxProps, type Theme } from "@mui/material";

type Props = {
  text: string;
  importance: "outlined" | "contained" | "text";
  classes?: SxProps<Theme>;
  type?: "submit";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CustomButton({
  text,
  importance,
  classes,
  type,
  onClick,
}: Props) {
  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
  }

  return (
    <Button
      type={type}
      sx={{ ...classes, textTransform: "none" }}
      variant={importance}
      onClick={handleOnClick}
    >
      {text}
    </Button>
  );
}
