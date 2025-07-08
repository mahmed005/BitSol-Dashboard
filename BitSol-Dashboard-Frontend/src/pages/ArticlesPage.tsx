import { Box, Stack } from "@mui/material";
import pic from "../assets/article.jpg";
import CardPost from "../components/Feed/CardPost";

const articles = [
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
  {
    main: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    secondary: "How Innovative Ideas Arise James Patterson | Est. Time: 1 hr",
    imgSrc: pic,
  },
];

export default function ArticlesPage() {
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
        {articles.map((article, index) => (
          <CardPost type="Article" {...article} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
