import { Avatar, Card, Typography } from "@mui/material";
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
        gap: "0.2rem",
        paddingX: "0.5rem",
        paddingY: "0.5rem",
        paddingBottom: "1rem",
        alignItems: "center",
        position: "relative",
        overflow: "visible",
        flexGrow: 1,
      }}
    >
      <Avatar src={imgSrc} alt={name} />
      <Typography color="black" variant="body2">
        {name}
      </Typography>
      <AddButton
        classes={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%)",
          width: "25px",
          height: "25px",
        }}
      />
    </Card>
  );
}
