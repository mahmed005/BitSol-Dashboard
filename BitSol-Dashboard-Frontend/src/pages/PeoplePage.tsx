import { Box, Stack } from "@mui/material";
import CardPost from "../components/Feed/CardPost";
import pic from "../assets/person.jpg";

const people = [
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
    isFollowed: true,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
    isFollowed: true,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
    isFollowed: true,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
    isFollowed: true,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
    isFollowed: true,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
  },
  {
    main: "David Davis",
    secondary: "IT Support Specialist | Nova Group",
    imgSrc: pic,
  },
];

export default function PeoplePage() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF4FD",
      }}
      width={"100dvw"}
      marginTop={"10dvh"}
      minHeight={"90dvh"}
      padding={"1rem"}
    >
      <Stack
        display={"grid"}
        columnGap={3}
        rowGap={3}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
      >
        {people.map((person, index) => (
          <CardPost type="Person" {...person} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
