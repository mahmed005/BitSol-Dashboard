import { Box, Typography } from "@mui/material";

export default function ProgressCircle({
  dimension,
  percentage,
}: {
  dimension: any;
  percentage: number;
}) {
  return (
    <Box
      width={`${dimension}rem`}
      height={`${dimension}rem`}
      position={"relative"}
    >
      <Box
        borderRadius={"50%"}
        sx={{
          backgroundColor: "customGrey.light",
        }}
        width={"100%"}
        height={"100%"}
      ></Box>
      <Box
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        borderRadius={"50%"}
        sx={{
          backgroundColor: "white",
          transform: "scale(0.9)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h6"
          fontWeight={"600"}
          fontSize={`${dimension / 4}rem`}
        >
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
}
