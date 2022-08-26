import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
  })
);
