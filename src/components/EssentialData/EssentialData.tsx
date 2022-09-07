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
import { useStyles } from "./EssentialData.style";
import { AppContext } from "Context";
import { week } from "initialValues";

export const EssentialData: React.FC = () => {
  const { formValues, handleChange, handleNext } = React.useContext(AppContext);

  const {
    victimPlace,
    victimRescued,
    hospitalOccurrence,
    addressOccurrence,
    neighborhoodOccurrence,
    ais,
    dayWeek,
    cityOccurrence,
    selectedDate,
    selectedHour,
    camera,
  } = formValues;

  const dateFuture = new Date().toISOString().slice(0, 10);

  const classes = useStyles();

  React.useEffect(() => {
    const newDate = new Date(selectedDate.value!);
    dayWeek.value = week[newDate.getDay()];
  }, [
    dayWeek,
    selectedDate.value,
    addressOccurrence,
    neighborhoodOccurrence,
    cityOccurrence,
  ]);

  const isError = React.useCallback(
    () =>
      Object.keys({
        victimPlace,
        victimRescued,
        hospitalOccurrence,
        addressOccurrence,
        neighborhoodOccurrence,
        ais,
        cityOccurrence,
        selectedDate,
        selectedHour,
        camera,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      victimPlace,
      victimRescued,
      hospitalOccurrence,
      addressOccurrence,
      neighborhoodOccurrence,
      ais,
      cityOccurrence,
      selectedDate,
      selectedHour,
      camera,
    ]
  );

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={6} sm={4} className={classes.field}>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Switch
                checked={victimPlace.value}
                required={victimPlace.required}
                onChange={handleChange}
                name="victimPlace"
                color="primary"
              />
            }
            label="Vítima no local"
          />
        </Grid>

        <Grid item xs={6} sm={4} className={classes.field}>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Switch
                checked={victimRescued.value}
                required={victimRescued.required}
                onChange={handleChange}
                name="victimRescued"
                color="primary"
              />
            }
            label="Vítima socorrida"
          />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.field}>
          <TextField
            value={hospitalOccurrence.value}
            onChange={handleChange}
            required={hospitalOccurrence.required}
            id="hospitalOccurrence"
            label="Hospital"
            variant="outlined"
            fullWidth
            name="hospitalOccurrence"
          />
        </Grid>

        <Grid item xs={12} className={classes.essentialData} spacing={2}>
          <Typography variant="h4">Dados essenciais da ocorrência</Typography>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={addressOccurrence.value}
            onChange={handleChange}
            required={addressOccurrence.required}
            error={!!addressOccurrence.error}
            helperText={addressOccurrence.error}
            id="addressOccurrence"
            label="Endereço"
            variant="outlined"
            name="addressOccurrence"
            fullWidth
          />
        </Grid>

        <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={neighborhoodOccurrence.value}
            onChange={handleChange}
            required={neighborhoodOccurrence.required}
            error={!!neighborhoodOccurrence.error}
            helperText={neighborhoodOccurrence.error}
            id="neighborhoodOccurrence"
            label="Bairro"
            variant="outlined"
            fullWidth
            name="neighborhoodOccurrence"
          />
        </Grid>

        <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={cityOccurrence.value}
            onChange={handleChange}
            required={cityOccurrence.required}
            error={!!cityOccurrence.error}
            helperText={cityOccurrence.error}
            id="cityOccurrence"
            label="Cidade"
            variant="outlined"
            fullWidth
            name="cityOccurrence"
          />
        </Grid>

        <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={ais.value}
            onChange={handleChange}
            required={ais.required}
            error={!!ais.error}
            helperText={ais.error}
            id="ais"
            label="AIS"
            variant="outlined"
            fullWidth
            name="ais"
          />
        </Grid>

        <Grid item xs={6} sm={4} className={classes.fieldsOccurrence}>
          <TextField
            id="date"
            label="Data"
            variant="outlined"
            type="date"
            value={selectedDate.value}
            onChange={handleChange}
            required={selectedDate.required}
            error={!!selectedDate.error}
            helperText={selectedDate.error}
            name="selectedDate"
            defaultValue={new Date()}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: { max: dateFuture, className: classes.date },
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={6} sm={4} className={classes.fieldsOccurrence}>
          <TextField
            disabled
            value={dayWeek.value}
            onChange={handleChange}
            id="dayWeek"
            label="Dia da semana"
            variant="outlined"
            fullWidth
            InputLabelProps={{ className: classes.dayWeek }}
            name="dayWeek"
          />
        </Grid>

        <Grid item xs={6} sm={4} className={classes.fieldsOccurrence}>
          <TextField
            id="time"
            label="Hora"
            variant="outlined"
            value={selectedHour.value}
            onChange={handleChange}
            required={selectedHour.required}
            helperText={selectedHour.error}
            name="selectedHour"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={12} className={classes.radioSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={camera.value}
                onChange={handleChange}
                name="camera"
                color="primary"
                required={camera.required}
              />
            }
            label="Há câmeras de vigilância no local ou no entorno?"
          />
        </Grid>

        <Grid
          className={classes.button}
          justifyContent="flex-end"
          alignItems="flex-end"
          container
          direction="row"
        >
          <Button
            disabled={isError()}
            variant="contained"
            color="primary"
            onClick={!isError() ? handleNext : () => null}
          >
            Próximo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
