import React from "react";
import { AppContext } from "../../Context";
import { EssentialData } from "../EssentialData";
import { SuspectsData } from "../SuspectsData";
import { VictimData } from "../VictimData";
import { Success } from "../Success";
import { ConfirmData } from "../ConfirmData";
import { Step, StepLabel, Stepper, Grid, Container } from "@material-ui/core";
import { useStyles } from "./Forms.style";

const labels = [
  "Dados essenciais da ocorrência",
  "Suspeitos",
  "Dados da vítima",
  "Confirmação",
];

const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <EssentialData />;
    case 1:
      return <SuspectsData />;
    case 2:
      return <VictimData />;
    case 3:
      return <ConfirmData />;
    default:
      throw new Error("Dados desconhecidos");
  }
};

export const Forms: React.FC = () => {
  const { activeStep } = React.useContext(AppContext);

  const classes = useStyles();

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <Grid>
          <Stepper
            className={classes.stepper}
            activeStep={activeStep}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </Grid>
      )}
    </Container>
  );
};
