import React from "react";
import {
  TextField,
  Typography,
  FormControlLabel,
  Grid,
  Switch,
  Container,
  Button,
} from "@material-ui/core";
import { useStyles } from "./SuspectsData.style";
import { AppContext } from "../../Context";

export const SuspectsData: React.FC = () => {
  const { formValues, handleChange, handleBack, handleNext } =
    React.useContext(AppContext);

  const { suspect, suspectName, infoSuspect } = formValues;

  const classes = useStyles();

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} className={classes.suspects}>
          <Typography variant="h4">Suspeitos</Typography>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.radioSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={suspect.value}
                onChange={handleChange}
                name="suspect"
                color="primary"
              />
            }
            label="Há suspeitos?"
          />
        </Grid>
        <Grid item xs={12} sm={9} className={classes.fieldsOccurrence}>
          <TextField
            value={suspectName.value}
            onChange={handleChange}
            id="suspectName"
            label="Nome(s) / Cognome(s)"
            variant="outlined"
            fullWidth
            name="suspectName"
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
          <TextField
            value={infoSuspect.value}
            onChange={handleChange}
            id="infoSuspect"
            label="Informações relevantes sobre o (s) suspeito (s)"
            InputLabelProps={{ className: classes.infoSuspect }}
            variant="outlined"
            fullWidth
            name="infoSuspect"
          />
        </Grid>
        <Grid
          className={classes.button}
          justifyContent="flex-end"
          alignItems="flex-end"
          container
          direction="row"
        >
          <Button onClick={handleBack}>Voltar</Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Próximo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
