import { Stack, Typography } from "@mui/material";
import CustomCard from "../CustomCard";
import pic1 from "../../../assets/pic_1 (1).png";
import EventPlannerItem from "./EventPlannerItem";
import CustomButton from "../../UI/CustomButton";

const planners = [
  {
    main: "Binford Ltd.",
    imgSrc: pic1,
    rating: 5,
  },
  {
    main: "Binford Ltd.",
    imgSrc: pic1,
    rating: 5,
  },
  {
    main: "Binford Ltd.",
    imgSrc: pic1,
    rating: 5,
  },
  {
    main: "Binford Ltd.",
    imgSrc: pic1,
    rating: 5,
  },
];

export default function EventPlanner() {
  return (
    <CustomCard>
      <Stack spacing={3}>
        <Typography fontWeight={600} variant="h6">
          Event Planner
        </Typography>
        <Stack spacing={1}>
          {planners.map((planner, index) => (
            <EventPlannerItem {...planner} key={index} />
          ))}
        </Stack>
        <CustomButton text="View All" importance="contained" />
      </Stack>
    </CustomCard>
  );
}
