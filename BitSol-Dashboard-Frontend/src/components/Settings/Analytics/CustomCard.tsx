import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export default function CustomCard({
  Key,
  value,
  isActive,
  setActive,
  number,
}: {
  Key: string;
  value: string | number;
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  number: number;
}) {
  return (
    <Card
      sx={{
        backgroundColor: isActive ? "primary.main" : "white",
        border: "0 solid",
        boxShadow: "none",
        paddingX: "1.25rem",
        paddingY: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "10px",
        "& .MuiTypography-root": {
          color: isActive ? "white" : "black",
        },
      }}
    >
      <CardActionArea onClick={() => setActive(number)}>
        <CardContent>
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="body2"
          >
            {Key}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "600",
            }}
            variant="h6"
          >
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
