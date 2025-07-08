import { Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import InfoItem from "./InfoItem";
import CustomButton from "../UI/CustomButton";
import type { Info } from "../../utils/Types";

export default function Info({
  type,
  items,
  heading,
}: {
  type?: "Event" | "Company";
  items: Info[];
  heading: string;
}) {
  return (
    <CustomCard>
      <Stack spacing={2}>
        <Typography variant="h6">{heading}</Typography>
        <Stack spacing={2}>
          {items.map((item, index) => (
            <InfoItem
              main={item.main}
              imgSrc={item.imgSrc}
              secondary={item.secondary}
              type={type}
              key={index}
            />
          ))}
        </Stack>
        <CustomButton text="View All" importance="contained" />
      </Stack>
    </CustomCard>
  );
}
