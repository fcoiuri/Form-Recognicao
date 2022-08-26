import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    suspects: {
      textAlign: "center",
    },

    root: {
      padding: theme.spacing(2, 4),
      alignItems: "center",
    },

    fieldsOccurrence: {
      padding: theme.spacing(1),
    },

    radioSwitch: {
      display: "grid",
      placeItems: "center",
    },

    victimScholarity: {
      minWidth: "100%",
      fontSize: 14,
    },

    button: {
      padding: theme.spacing(1),
    },
  })
);
