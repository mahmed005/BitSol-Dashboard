import { Card, Stack, Typography } from "@mui/material";
import type { ReactElement } from "react";

export default function UserDataDisplayItem({
  heading,
  text,
  isExtended,
  Icon,
}: {
  heading?: string;
  text: string;
  isExtended?: boolean;
  Icon?: ReactElement;
}) {
  return (
    <Stack width={"100%"} spacing={0.5} flexGrow={"1"}>
      {heading && (
        <Typography
          sx={{
            fontSize: "1rem",
          }}
          variant="h6"
        >
          {heading}
        </Typography>
      )}
      <Card
        sx={{
          border: "1px solid",
          borderColor: "customGrey.main",
          paddingX: "1.5rem",
          paddingY: "0.75rem",
          width: "100%",
          minHeight: isExtended ? "10rem" : "auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
        variant="outlined"
      >
        {Icon && Icon}
        <span>{text}</span>
      </Card>
    </Stack>
  );
}
