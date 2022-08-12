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
        // margin: "0 8vw 0 8vw",
        display: "grid",
        placeItems: "center",
        alignItems: "center"
    },
    field: {
        //   padding: theme.spacing(2),
        textAlign: 'center',
    },
    fieldsOccurrence: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        // margin: "0 0 0 1vw",
    },
    checkbox: {
      //   marginTop: "1vh",
      transform: "scale(1.5)",
    },
    address: {
      //   marginTop: "1vh",
    },
  })
);
