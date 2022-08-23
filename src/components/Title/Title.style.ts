import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      margin: "3vh 1vw 0 1vw",
      [theme.breakpoints.down("xs")]: {
        fontSize: 28,
        fontWeight: 600,
      },
    },
  })
);
