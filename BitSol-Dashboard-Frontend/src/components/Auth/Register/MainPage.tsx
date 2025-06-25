import { Grid } from "@mui/material";
import LeftSection from "../LeftSection";
import RightSection3 from "./RightSection3";
import type { FormInputs as firstFormInputs } from "./Form1";
import type { FormInputs as SecondFormInputs } from "./Form2";
import type { FormInputs as ThirdFormInput } from "./Form3";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import RightSection1 from "./RightSection1";
import RightSection2 from "./RightSection2";

export type RegistrationData = firstFormInputs &
  SecondFormInputs &
  ThirdFormInput;

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [registrationData, setRegistrationData] = useState<
    Partial<RegistrationData>
  >({});

  useEffect(() => {
    function resetSearchParams(step: string) {
      const params = new URLSearchParams();
      params.append("step", step);
      setSearchParams(params);
    }

    const step = searchParams.get("step");
    if (!step || (step !== "1" && step !== "2" && step !== "3"))
      resetSearchParams("1");
    else if (step === "2")
      if (
        !(
          registrationData.fullName !== undefined &&
          registrationData.email !== undefined &&
          registrationData.password !== undefined
        )
      )
        resetSearchParams("1");
      else if (
        !(
          registrationData.fullName !== undefined &&
          registrationData.email !== undefined &&
          registrationData.password !== undefined &&
          registrationData.countryPhone !== undefined &&
          registrationData.phNum !== undefined &&
          registrationData.address !== undefined &&
          registrationData.country !== undefined
        )
      )
        resetSearchParams("1");
  }, [searchParams]);

  const step = searchParams.get("step");
  let componentRendered = null;
  if (step === "1")
    componentRendered = (
      <RightSection1 setRegistrationData={setRegistrationData} />
    );
  else if (step === "2")
    componentRendered = (
      <RightSection2 setRegistrationData={setRegistrationData} />
    );
  else if (step === "3")
    componentRendered = (
      <RightSection3 setRegistrationData={setRegistrationData} />
    );

  return (
    <Grid container margin={0} padding={0}>
      <LeftSection />
      {componentRendered}
    </Grid>
  );
}
