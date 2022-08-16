import React from "react";
import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./ConfirmData.style";
import { AppContext } from "../../Context";
import { pdf } from "@react-pdf/renderer";
import { CreatePDF } from "../CreatePDF";
// @ts-ignore
import { saveAs } from "file-saver";

export const ConfirmData: React.FC = () => {
  const { formValues, handleNext, handleBack } = React.useContext(AppContext);

  const {
    victimPlace,
    victimRescued,
    hospitalOccurrence,
    addressOccurrence,
    neighborhoodOccurrence,
    ais,
    cityOccurrence,
    selectedDate,
    dayWeek,
    selectedHour,
    camera,
    suspect,
    suspectName,
    infoSuspect,
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

  const [dateFormat, setDateFormat] = React.useState("");
  const [victimPlacePrint, setVictimPlacePrint] = React.useState("Não");
  const [victimRescuedPrint, setVictimRescuedPrint] = React.useState("Não");
  const [victimPlaceX, setVictimPlaceX] = React.useState("( )");
  const [victimRescuedX, setVictimRescuedX] = React.useState("( )");
  const [cameraPrint, setCameraPrint] = React.useState("Não");
  const [suspectPrint, setSuspectPrint] = React.useState("Não");

  const classes = useStyles();

  const handleSubmit = async () => {
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    const document = (
      <CreatePDF
        victimPlace={victimPlaceX}
        victimRescued={victimRescuedX}
        hospitalOccurrence={hospitalOccurrence.value}
        addressOccurrence={addressOccurrence.value}
        neighborhoodOccurrence={neighborhoodOccurrence.value}
        ais={ais.value}
        cityOccurrence={cityOccurrence.value}
        selectedDate={dateFormat}
        dayWeek={dayWeek.value}
        selectedHour={selectedHour.value}
        camera={cameraPrint}
        suspect={suspectPrint}
        suspectName={suspectName.value}
        infoSuspect={infoSuspect.value}
        victimName={victimName.value}
        dn={dn.value}
        victimFather={victimFather.value}
        victimMother={victimMother.value}
        victimGender={victimGender.value}
        victimAddress={victimAddress.value}
        victimNeighborhood={victimNeighborhood.value}
        victimCity={victimCity.value}
        victimReference={victimReference.value}
        victimScholarity={victimScholarity.value}
      />
    );
    const asPdf = pdf();
    asPdf.updateContainer(document);
    const blob = await asPdf.toBlob();
    saveAs(blob, "Recognição Visuográfica de local de crime");
    handleNext();
  };

  React.useEffect(() => {
    if (victimPlace.value) {
      setVictimPlacePrint("Sim");
      setVictimPlaceX("( X )");
    }
    if (victimRescued.value) {
      setVictimRescuedPrint("Sim");
      setVictimRescuedX("( X )");
    }

    setDateFormat(selectedDate.value.split("-").reverse().join("-"));
    if (camera.value) setCameraPrint("Sim");
    if (suspect.value) setSuspectPrint("Sim");
  }, [victimPlace, victimRescued, selectedDate, camera, suspect]);

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="Vítima no Local"
            secondary={victimPlacePrint || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Vítima Socorrida"
            secondary={victimRescuedPrint || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Hospital"
            secondary={hospitalOccurrence.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Endereço da Ocorrência"
            secondary={addressOccurrence.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Bairro da Ocorrência"
            secondary={neighborhoodOccurrence.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="AIS"
            secondary={ais.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Cidade da Ocorrência"
            secondary={cityOccurrence.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Data da Ocorrência"
            secondary={dateFormat || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Dia da semana da Ocorrência"
            secondary={dayWeek.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Hora da Ocorrência"
            secondary={selectedHour.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Há câmeras de vigilância no local ou no entorno da Ocorrência"
            secondary={cameraPrint || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Há suspeitos?"
            secondary={suspectPrint || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Nome(s) / Cognome(s) do(s) suspeito(s)"
            secondary={suspectName.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Informações relevantes sobre o (s) suspeito (s)"
            secondary={infoSuspect.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Nome da vítima"
            secondary={victimName.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="D.N" secondary={dn.value || "Não Informado"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Nome do pai da vítima"
            secondary={victimFather.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Nome da mãe da vítima"
            secondary={victimMother.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Sexo da vítima"
            secondary={victimGender.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Endereço da vítima"
            secondary={victimAddress.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Bairro da vítima"
            secondary={victimNeighborhood.value || "Não Informado"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Cidade da vítima"
            secondary={victimCity.value || "Não Informado"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Referência"
            secondary={victimReference.value || "Não Informado"}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Escolaridade da vítima"
            secondary={victimScholarity.value || "Não Informado"}
          />
        </ListItem>
      </List>

      <Grid
        className={classes.button}
        justifyContent="flex-end"
        alignItems="flex-end"
        container
        direction="row"
      >
        <Button onClick={handleBack}>Voltar</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Confirmar & Continuar
        </Button>
      </Grid>
    </>
  );
};
