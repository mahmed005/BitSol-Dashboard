import { List, Stack } from "@mui/material";
import CustomListItem from "./CustomListItem";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PaymentsIcon from "@mui/icons-material/Payments";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function NavbarList() {
  return (
    <Stack flexGrow={1} justifyContent={"space-between"}>
      <List>
        <CustomListItem
          icon={<SettingsRoundedIcon />}
          to="/settings"
          primary="General"
        />
        <CustomListItem
          icon={<LockIcon />}
          to="/settings/security"
          primary="Security"
        />
        <CustomListItem
          icon={<MailOutlineIcon />}
          to="/settings/notifications"
          primary="Notifications"
        />
        <CustomListItem
          icon={<PaymentsIcon />}
          to="/settings/billing"
          primary="Billing"
        />
        <CustomListItem
          icon={<AnalyticsIcon />}
          to="/settings/analytics"
          primary="Analytics"
        />
      </List>
      <List>
        <CustomListItem
          to="/auth"
          primary="Log out"
          icon={<LogoutOutlinedIcon />}
        />
      </List>
    </Stack>
  );
}
