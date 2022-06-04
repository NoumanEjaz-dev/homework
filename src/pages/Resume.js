import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainCard from "../components/box/MainCard";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) =>
  createStyles({
    ResumeExperties: {
      marginTop: "30px",
      marginBottom: "60px",
    },
    resumeHeading: {
      textAlign: "center",
      marginBottom: "20px",
    },
    skillHeading: {
      textAlign: "center",
      "&:hover": {
        color: theme.palette.common.yellow,
      },
    },
    skillPara: {
      padding: "2px",
      fontSize: "18px",
      textAlign: "center",
      "&:hover": {
        color: theme.palette.common.yellow,
      },
    },
  })
);

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ResumeExperties}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.resumeHeading}
        >
          Resume
        </Typography>{" "}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={6}>
            <MainCard>
              <Typography className={classes.skillHeading} variant="h5">
                Front-end Proficiency
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                HTML
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                CSS
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                bootstrap
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                Javascript
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                React
              </Typography>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <MainCard>
              {" "}
              <Typography className={classes.skillHeading} variant="h5">
                Back-end Proficiency
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                Node js
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                PHP
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                Graphyql
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                Javascript
              </Typography>
              <br />
              <Typography className={classes.skillPara} variant="subtitle1">
                Express
              </Typography>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Resume;
