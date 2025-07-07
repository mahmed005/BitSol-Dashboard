import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ExpensesBarChart from "./ExpensesBarChart";
import { useState } from "react";

export default function Expenses() {
  const [activeBtn, setActiveBtn] = useState<string | null>("weekly");

  const handleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    newBtn: string | null
  ) => {
    setActiveBtn(newBtn);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={"600"}>
        Expenses
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={activeBtn}
        onChange={handleButtonChange}
        sx={{
          borderRadius: "25%",
          "& button": {
            borderRadius: "25% !important",
            border: "0px solid !important",
            backgroundColor: "#1565D814",
          },
          "& .Mui-selected": {
            backgroundColor: "#1565D8 !important",
            color: "white !important",
          },
        }}
      >
        <ToggleButton value="weekly" aria-label="Weekly">
          Weekly
        </ToggleButton>
        <ToggleButton value="monthly" aria-label="Monthly">
          Monthly
        </ToggleButton>
        <ToggleButton value="yearly" aria-label="Yearly">
          Yearly
        </ToggleButton>
      </ToggleButtonGroup>
      <ExpensesBarChart />
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-0.5">
          <div className="w-2 h-2 rounded-full bg-[#1565D8]"></div>
          <Typography
            sx={{
              color: "customGrey.dark",
            }}
            variant="body2"
          >
            Income
          </Typography>
        </div>
        <div className="flex justify-center items-center gap-0.5">
          <div className="w-2 h-2 rounded-full bg-[#F572B9]"></div>
          <Typography
            sx={{
              color: "customGrey.dark",
            }}
            variant="body2"
          >
            Expenses
          </Typography>
        </div>
      </div>
    </Stack>
  );
}
