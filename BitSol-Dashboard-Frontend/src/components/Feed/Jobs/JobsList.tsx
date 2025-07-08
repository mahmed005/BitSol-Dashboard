import { Stack } from "@mui/material";
import JobItem from "./JobItem";
import companyLogo from "../../../assets/company.png";

const jobs = [
  {
    accSrc: companyLogo,
    company: "Louis Vuitton",
    title: "Marketing Coordinator",
    description: "Lafayette, California | $50/hr",
  },
];

export default function JobsList() {
  return (
    <Stack spacing={2}>
      {jobs.map((job, index) => (
        <JobItem {...job} key={index} />
      ))}
    </Stack>
  );
}
