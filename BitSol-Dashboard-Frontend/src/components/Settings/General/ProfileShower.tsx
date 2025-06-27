import CustomButton from "../../UI/CustomButton";
import Profile from "../Profile";

export default function ProfileShower() {
  return (
    <Profile width="8.5rem">
      <CustomButton
        classes={{
          marginBottom: "0.5rem",
          textTransform: "none",
        }}
        text="Change Picture"
        importance="contained"
      />
      <CustomButton
        classes={{
          textTransform: "none",
        }}
        text="Delete Picture"
        importance="outlined"
      />
    </Profile>
  );
}
