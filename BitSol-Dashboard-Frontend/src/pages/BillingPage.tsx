import { Stack } from "@mui/material";
import Heading from "../components/Settings/Billing/Heading";
import BillingTable from "../components/Settings/Billing/BillingTable";
import PaymentMethod from "../components/Settings/Billing/PaymentMethod";
import SideCard from "../components/Settings/Billing/SideCard";

export default function BillingPage() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} marginTop={3} spacing={2}>
      <Stack spacing={3}>
        <Heading />
        <BillingTable />
        <PaymentMethod />
      </Stack>
      <SideCard />
    </Stack>
  );
}
