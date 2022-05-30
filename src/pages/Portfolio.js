import { makeStyles, createStyles } from "@material-ui/core/styles";
import MediaCard from "../components/card/MediaCard";
import Grid from "@material-ui/core/Grid";
import Img1 from "../assest/images/pagedesing.png";
import Img2 from "../assest/images/port-img-1.PNG";
import Img3 from "../assest/images/webdevelopmenSmt.png";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      marginBottom: "60px",
    },
  })
);

const RewardPage = () => {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.root}>
        <Grid item xs={12}>
        </Grid>
      </div> */}

      <div className={classes.root}>
        <Grid container>
          <Grid container item xs={12} sm={6} lg={4} spacing={3}>
            <MediaCard image={Img1} />
          </Grid>
          <Grid container item xs={12} sm={6} lg={4} spacing={3}>
            <MediaCard image={Img2} />
          </Grid>
          <Grid container xs={12} sm={6} lg={4} spacing={3}>
            <MediaCard image={Img3} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RewardPage;
