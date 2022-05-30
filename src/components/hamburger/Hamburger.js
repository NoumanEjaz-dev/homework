import { IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiToolbar-regular": {
      height: "75px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const HamBurger = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={toggleDrawer("left", true)}
    >
      <MenuIcon />
    </IconButton>
  );
};
export default HamBurger;
