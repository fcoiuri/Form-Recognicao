import React from "react";
import { Title } from "../Title";
import { useStyles } from "./Home.style";
import { Forms } from "../Forms";
import { Grid } from "@material-ui/core";

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.application}>
      <Title />
      <Forms />
    </Grid>
  );
};
