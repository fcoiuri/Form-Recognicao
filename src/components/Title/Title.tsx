import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./Title.style";

export const Title: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography variant="h2" className={classes.title}>
        Recognição Visuográfica de local de crime
      </Typography>
    </Grid>
  );
};
