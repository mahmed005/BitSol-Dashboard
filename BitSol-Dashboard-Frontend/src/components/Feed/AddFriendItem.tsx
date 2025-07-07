import { Card, Typography } from "@mui/material";
import AddButton from "../UI/AddButton";

export default function AddFriendItem({
  imgSrc,
  name,
}: {
  imgSrc: string;
  name: string;
}) {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "1px solid",
        borderColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        paddingX: "0.5rem",
        paddingY: "0.25rem",
        paddingBottom: "0.5rem",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img src={imgSrc} alt={name} />
      <Typography variant="body2">{name}</Typography>
      <AddButton
        classes={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%)",
        }}
      />
    </Card>
  );
}
