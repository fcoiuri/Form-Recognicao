import React from "react";
import {
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  FormControl,
  Button,
  Switch,
  Container,
} from "@material-ui/core";
import { useStyles } from "./Forms.style";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import deLocale from "date-fns/locale/pt-BR";

export const Forms: React.FC = () => {
  const [victimPlace, setVictimPlace] = React.useState(false);
  const [victimRescued, setVictimRescued] = React.useState(false);
  const [victim, setVictim] = React.useState({
    place: false,
    rescued: false,
  });
  const [address, setAddress] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [ais, setAis] = React.useState("");
  const [city, setCity] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [dayWeek, setDayWeek] = React.useState("");
  const [selectedHour, setSelectedHour] = React.useState<Date | null>(
    new Date()
  );
  const [camera, setCamera] = React.useState(false);
  const [suspect, setSuspect] = React.useState(false);
  const [suspectName, setSuspectName] = React.useState("");
  const [infoSuspect, setInfoSuspect] = React.useState("");

  const classes = useStyles();

  const handleVictimPlaceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimPlace(event.target.checked);
  };

  const handleVictimRescuedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimRescued(event.target.checked);
  };

  const handleVictimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVictim({ ...victim, [event.target.name]: event.target.checked });
  };

  const handleCEPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleNeighborhoodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNeighborhood(event.target.value);
  };

  const handleAisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAis(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDayWeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDayWeek(event.target.value);
  };

  const handleHourChange = (hour: Date | null) => {
    setSelectedHour(hour);
  };

  const handleCameraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCamera(event.target.checked);
  };

  const handleSuspectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuspect(event.target.checked);
  };

  const handleSuspectNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSuspectName(event.target.value);
  };

  const handleInfoSuspectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInfoSuspect(event.target.value);
  };

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      <form>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={6} className={classes.field}>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Switch
                  checked={victimPlace}
                  onChange={handleVictimPlaceChange}
                  name="victimRescued"
                  color="primary"
                />
              }
              label="Vítima no local"
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.field}>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Switch
                  checked={victimRescued}
                  onChange={handleVictimRescuedChange}
                  name="victimRescued"
                  color="primary"
                />
              }
              label="Vítima socorrida"
            />
          </Grid>
          <Grid item xs={12} className={classes.essentialData} spacing={2}>
            <Typography variant="h4">Dados essenciais da ocorrência</Typography>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={address}
              onChange={handleCEPChange}
              id="address"
              label="Digite o Endereço"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={neighborhood}
              onChange={handleNeighborhoodChange}
              id="neighborhood"
              label="Digite o Bairro"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={ais}
              onChange={handleAisChange}
              id="city"
              label="Digite a AIS"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={city}
              onChange={handleCityChange}
              id="city"
              label="Digite a Cidade"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <Grid item xs={6} sm={3} className={classes.fieldsOccurrence}>
              <KeyboardDatePicker
                // disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                id="date"
                label="Data"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                inputVariant="outlined"
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={dayWeek}
              onChange={handleDayWeekChange}
              id="dayWeek"
              label="Dia da semana"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} className={classes.fieldsOccurrence}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
              <KeyboardTimePicker
                inputVariant="outlined"
                id="hour"
                ampm={false}
                label="Hora provável do crime"
                value={selectedHour}
                onChange={handleHourChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.field}>
            <FormControlLabel
              control={
                <Switch
                  checked={camera}
                  onChange={handleCameraChange}
                  name="victimRescued"
                  color="primary"
                />
              }
              label="Há câmeras de vigilância no local ou no entorno?"
            />
          </Grid>
          <Grid item xs={12} className={classes.suspects}>
            <Typography variant="h4">Suspeitos</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Switch
                  checked={suspect}
                  onChange={handleSuspectChange}
                  name="suspectsSwitch"
                  color="primary"
                />
              }
              label="Há suspeitos?"
            />
          </Grid>
          <Grid item xs={6} sm={9} className={classes.fieldsOccurrence}>
            <TextField
              value={suspectName}
              onChange={handleSuspectNameChange}
              id="dayOfWeek"
              label="Nome(s) / Cognome(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={12} className={classes.fieldsOccurrence}>
            <TextField
              value={infoSuspect}
              onChange={handleInfoSuspectChange}
              id="dayOfWeek"
              label="Informações relevantes sobre o (s) suspeito (s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
