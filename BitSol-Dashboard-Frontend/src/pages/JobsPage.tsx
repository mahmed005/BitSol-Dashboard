import { Stack, Typography } from "@mui/material";
import CustomCard from "../components/Feed/CustomCard";
import JobsList from "../components/Feed/Jobs/JobsList";

export default function JobsPage() {
  return (
    <CustomCard>
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography
            sx={{
              lineHeight: "1.25rem",
            }}
            fontWeight={700}
            variant="h6"
          >
            Find jobs the easy way
          </Typography>
          <Typography variant="body2">
            Broaden your job search with curated collections
          </Typography>
        </Stack>
        <JobsList />
      </Stack>
    </CustomCard>
  );
}
