import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      marginTop: "3vh",
    },
    essentialData: {
      textAlign: "center",
      margin: "3vh 0 2vh 0",
    },
    suspects: {
      textAlign: "center",
    },
    root: {
      padding: theme.spacing(2, 4),
      alignItems: "center",
    },
    field: {
      textAlign: "center",
    },
    fieldsOccurrence: {
      padding: theme.spacing(1),
    },
    checkbox: {
      transform: "scale(1.5)",
      [theme.breakpoints.down("xs")]: {
        transform: "scale(1.1)",
      },
    },
    dayWeek: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
    },
    infoSuspect: {
      fontSize: 14,
    },
    date: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    radioSwitch: {
      display: "grid",
      placeItems: "center",
    },
    victimScholarity: {
      minWidth: "100%",
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
    button: {
      padding: theme.spacing(1),
    },
  })
);
