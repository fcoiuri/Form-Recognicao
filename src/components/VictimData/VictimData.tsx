import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import { useStyles } from "./VictimData.style";
import { AppContext } from "../../Context";

export const VictimData: React.FC = () => {
  const { formValues, handleChange, handleBack, handleNext } =
    React.useContext(AppContext);

  const {
    victimName,
    dn,
    victimFather,
    victimMother,
    victimGender,
    victimAddress,
    victimNeighborhood,
    victimCity,
    victimReference,
    victimScholarity,
  } = formValues;

  const classes = useStyles();

  return (
    <Container component="section" maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} className={classes.suspects}>
          <Typography variant="h4">Dados da vítima</Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
          <TextField
            value={victimName.value}
            onChange={handleChange}
            id="victimName"
            label="Nome da vítima"
            variant="outlined"
            fullWidth
            name="victimName"
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
          <TextField
            value={victimFather.value}
            onChange={handleChange}
            id="victimFather"
            label="Nome do pai da vítima"
            variant="outlined"
            fullWidth
            name="victimFather"
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.fieldsOccurrence}>
          <TextField
            value={victimMother.value}
            onChange={handleChange}
            id="victimMother"
            label="Nome da mãe da vítima"
            variant="outlined"
            fullWidth
            name="victimMother"
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.fieldsOccurrence}>
          <TextField
            value={dn.value}
            onChange={handleChange}
            id="dn"
            label="D.N"
            variant="outlined"
            fullWidth
            name="dn"
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.radioSwitch}>
          <TextField
            name="victimGender"
            value={victimGender.value}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Sexo"
          >
            <option value=""> </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            label="Escolaridade"
            name="victimScholarity"
            value={victimScholarity.value}
            onChange={handleChange}
            inputProps={{ className: classes.victimScholarity }}
          >
            <option value=""> </option>
            <option value="Não Informado">Não Informado</option>
            <option value="Analfabeto">Analfabeto</option>
            <option value="Ensino Fundamental Incompleto">
              Ensino Fundamental Incompleto
            </option>
            <option value="Ensino Fundamental Completo">
              Ensino Fundamental Completo
            </option>
            <option value="Ensino Médio Incompleto">
              Ensino Médio Incompleto
            </option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">
              Ensino Superior Incompleto
            </option>
            <option value="Ensino Superior Completo">
              Ensino Superior Completo
            </option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={victimAddress.value}
            onChange={handleChange}
            id="victimAddress"
            label="Endereço"
            variant="outlined"
            fullWidth
            name="victimAddress"
          />
        </Grid>
        <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={victimNeighborhood.value}
            onChange={handleChange}
            id="victimNeighborhood"
            label="Bairro"
            variant="outlined"
            fullWidth
            name="victimNeighborhood"
          />
        </Grid>
        <Grid item xs={6} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={victimCity.value}
            onChange={handleChange}
            id="victimCity"
            label="Cidade"
            variant="outlined"
            fullWidth
            name="victimCity"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.fieldsOccurrence}>
          <TextField
            value={victimReference.value}
            onChange={handleChange}
            id="victimReference"
            label="Referência"
            variant="outlined"
            fullWidth
            name="victimReference"
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
