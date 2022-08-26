import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useStyles } from "./Success.style";

export const Success: React.FC = () => {
  const classes = useStyles();

  const handleRefreshPage = async () => {
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Typography variant="h4" align="center">
        Dados Enviados
      </Typography>
      <Typography component="h5" align="center">
        Recarregue a página para preencher novamente
      </Typography>
      <Grid
        justifyContent="center"
        container
        direction="row"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleRefreshPage}
        >
          Recarregar
        </Button>
      </Grid>
    </React.Fragment>
  );
};
