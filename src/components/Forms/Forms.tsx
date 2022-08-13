import React from "react";
import {
  TextField,
  Typography,
  FormControlLabel,
  Grid,
  Button,
  Switch,
  Container,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
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
  const [addressOccurrence, setAddressOccurrence] = React.useState("");
  const [neighborhoodOccurrence, setNeighborhoodOccurrence] =
    React.useState("");
  const [ais, setAis] = React.useState("");
  const [cityOccurrence, setCityOccurrence] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [dayWeek, setDayWeek] = React.useState("");
  const [selectedHour, setSelectedHour] = React.useState<Date | null>(
    new Date()
  );
  const [camera, setCamera] = React.useState(false);
  const [suspect, setSuspect] = React.useState(false);
  const [hospitalOccurrence, setHospitalOccurrence] = React.useState("");
  const [suspectName, setSuspectName] = React.useState("");
  const [infoSuspect, setInfoSuspect] = React.useState("");
  const [victimName, setVictimName] = React.useState("");
  const [dn, setDn] = React.useState("");
  const [victimFather, setVictimFather] = React.useState("");
  const [victimMother, setVictimMother] = React.useState("");
  const [victimGender, setVictimGender] = React.useState("");
  const [victimAddress, setVictimAddress] = React.useState("");
  const [victimNeighborhood, setVictimNeighborhood] = React.useState("");
  const [victimCity, setVictimCity] = React.useState("");
  const [victimReference, setVictimReference] = React.useState("");
  const [victimScholarity, setVictimScholarity] = React.useState("");

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

  const handleHospitalOccurrenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHospitalOccurrence(event.target.value);
  };

  const handleVictimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVictim({ ...victim, [event.target.name]: event.target.checked });
  };

  const handleAddressOccurrenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressOccurrence(event.target.value);
  };

  const handleNeighborhoodOccurrenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNeighborhoodOccurrence(event.target.value);
  };

  const handleAisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAis(event.target.value);
  };

  const handleCityOccurrenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityOccurrence(event.target.value);
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

  const handleVictimNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimName(event.target.value);
  };

  const handleDnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDn(event.target.value);
  };

  const handleVictimFatherChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimFather(event.target.value);
  };

  const handleVictimMotherChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimMother(event.target.value);
  };

  const handleVictimGenderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimGender((event.target as HTMLInputElement).value);
  };

  const handleVictimAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimAddress(event.target.value);
  };

  const handleVictimNeighborhoodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimNeighborhood(event.target.value);
  };

  const handleVictimCityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimCity(event.target.value);
  };

  const handleVictimReferenceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVictimReference(event.target.value);
  };

  const handleVictimScholarityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setVictimScholarity(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      "camera:",
      camera,
      "suspect: ",
      suspect,
      "victimScholarity: ",
      victimScholarity,
      "victimGender: ",
      victimGender,
      "selectedHour:",
      selectedHour,
      "selectedDate:",
      selectedDate
    );
  };

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={6} sm={4} className={classes.field}>
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
          <Grid item xs={6} sm={4} className={classes.field}>
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
          <Grid item xs={12} sm={4} className={classes.field}>
            <TextField
              value={hospitalOccurrence}
              onChange={handleHospitalOccurrenceChange}
              id="hospital"
              label="Hospital"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.essentialData} spacing={2}>
            <Typography variant="h4">Dados essenciais da ocorrência</Typography>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={addressOccurrence}
              onChange={handleAddressOccurrenceChange}
              id="addressOccurrence"
              label="Endereço"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={neighborhoodOccurrence}
              onChange={handleNeighborhoodOccurrenceChange}
              id="neighborhoodOccurrence"
              label="Bairro"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={cityOccurrence}
              onChange={handleCityOccurrenceChange}
              id="cityOccurrence"
              label="Cidade"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={ais}
              onChange={handleAisChange}
              id="ais"
              label="AIS"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <Grid item xs={6} sm={3} className={classes.fieldsOccurrence}>
              <KeyboardDatePicker
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
                InputProps={{ className: classes.date }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={dayWeek}
              onChange={handleDayWeekChange}
              id="dayWeek"
              label="Digite o dia da semana"
              variant="outlined"
              fullWidth
              InputLabelProps={{ className: classes.dayWeek }}
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
                cancelLabel="Cancelar"
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.radioSwitch}>
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
          <Grid item xs={12} sm={3} className={classes.radioSwitch}>
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
          <Grid item xs={12} sm={9} className={classes.fieldsOccurrence}>
            <TextField
              value={suspectName}
              onChange={handleSuspectNameChange}
              id="suspectName"
              label="Nome(s) / Cognome(s)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
            <TextField
              value={infoSuspect}
              onChange={handleInfoSuspectChange}
              id="infoSuspect"
              label="Informações relevantes sobre o (s) suspeito (s)"
              InputLabelProps={{ className: classes.infoSuspect }}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.suspects}>
            <Typography variant="h4">Dados da vítima</Typography>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
            <TextField
              value={victimName}
              onChange={handleVictimNameChange}
              id="victimName"
              label="Nome da vítima"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
            <TextField
              value={victimFather}
              onChange={handleVictimFatherChange}
              id="victimFather"
              label="Nome do pai da vítima"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
            <TextField
              value={victimMother}
              onChange={handleVictimMotherChange}
              id="victimMother"
              label="Nome da mãe da vítima"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.fieldsOccurrence}>
            <TextField
              value={dn}
              onChange={handleDnChange}
              id="dn"
              label="D.N"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={4} className={classes.radioSwitch}>
            <FormLabel component="legend">Sexo</FormLabel>
            <RadioGroup
              aria-label="victimGender"
              name="victimGender"
              value={victimGender}
              onChange={handleVictimGenderChange}
              row
            >
              <FormControlLabel
                value="Masculino"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="Feminino"
                control={<Radio />}
                label="Feminino"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={8} sm={4}>
            <FormControl
              variant="outlined"
              className={classes.victimScholarity}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Escolaridade
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={victimScholarity}
                onChange={handleVictimScholarityChange}
                label="Escolaridade"
                inputProps={{ className: classes.victimScholarity }}
              >
                <MenuItem value="Não Informado">
                  <em>Não Informado</em>
                </MenuItem>
                <MenuItem value={"Analfabeto"}>Analfabeto</MenuItem>
                <MenuItem value={"E.F. Incompleto"}>
                  Ensino Fundamental Incompleto
                </MenuItem>
                <MenuItem value={"E.F. Completo"}>
                  Ensino Fundamental Completo
                </MenuItem>
                <MenuItem value={"E.M. Incompleto"}>
                  Ensino Médio Incompleto
                </MenuItem>
                <MenuItem value={"E.M. Completo"}>
                  Ensino Médio Completo
                </MenuItem>
                <MenuItem value={"E.S. Incompleto"}>
                  Ensino Superior Incompleto
                </MenuItem>
                <MenuItem value={"E.S. Completo"}>
                  Ensino Superior Completo
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={victimAddress}
              onChange={handleVictimAddressChange}
              id="victimAddress"
              label="Endereço"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={victimNeighborhood}
              onChange={handleVictimNeighborhoodChange}
              id="victimNeighborhood"
              label="Bairro"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={victimCity}
              onChange={handleVictimCityChange}
              id="victimCity"
              label="Cidade"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
            <TextField
              value={victimReference}
              onChange={handleVictimReferenceChange}
              id="victimReference"
              label="Referência"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Finalizar Ocorrência
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
