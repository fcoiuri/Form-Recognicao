import React from "react";
import { Title } from "components/Title";
import { useStyles } from "./Home.style";
import { Forms } from "components/Forms";
import { Grid, Paper } from "@material-ui/core";

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper variant="outlined" className={classes.application}>
        <Title />
        <Forms />
      </Paper>
    </Grid>
  );
};
