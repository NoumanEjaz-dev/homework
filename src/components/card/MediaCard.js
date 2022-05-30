import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img1 from "../../assest/images/port-img-1.PNG";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    background: "#1c1c1c",
    justifyContent: "center",
    marginTop: "45px",
  },
  media: {
    padding: "10px",
    height: 170,
  },
  GitBtn: {
    backgroundColor: "#D09A0A",
    "&:hover": {
      backgroundColor: "#D09A0A",
    },
  },
});

export default function MediaCard({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.heading}>
            Techyme.org
          </Typography>
          <Typography variant="body2" component="p">
            Techyme website is a website for teaching programming to new users
            This is was the project that I have done for my one of client.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.GitBtn}>
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
