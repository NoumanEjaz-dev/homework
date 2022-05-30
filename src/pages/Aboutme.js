import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainCard from "../components/box/MainCard";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "20px",
    },
    icon: {
      fontSize: "50px",
      color: theme.palette.common.white,
    },
    aboutmeHeading: {
      color: theme.palette.common.white,
    },
    paraAboutme: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      lineHeight: "1.5",
    },
    devIcons: {
      color: theme.palette.common.white,
      textAlign: "center",
    },
  })
);

const Aboutme = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <MainCard>
          <h1 className={classes.aboutmeHeading}>About Me</h1>
          <AccountCircleIcon className={classes.icon} />
          <br />
          <p className={classes.paraAboutme}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </MainCard>
      </Grid>
    </div>
  );
};

export default Aboutme;
