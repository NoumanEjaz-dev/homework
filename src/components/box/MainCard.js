import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightDark,
    borderRadius: "5px",
  },
}));

const MainCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MainCard;
