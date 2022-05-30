import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "20px",
    },
    devIcons: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <div className={classes.devIcons}>
          <span>
            {" "}
            <GitHubIcon />
          </span>
          <span>
            {" "}
            <LinkedInIcon />
          </span>
          <span>
            {" "}
            <ViewQuiltIcon />
          </span>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;
