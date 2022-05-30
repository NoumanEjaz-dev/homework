import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navItem: {
    padding: "0px 1.5rem",

    "& a": {
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "22px",
      fontFamily: "ROBOTO",
      color: "#ffffff",
      position: "relative",
      "&.active": {
        "&:before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "3px",
          bottom: "-7px",
          left: "50%",
          transform: "translate(-50%,0%)",
          backgroundColor: theme.palette.common.yellow,
          visibility: "visible",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
}));
const NavItem = ({ title, routePath }) => {
  const classes = useStyles();
  return (
    <li className={classes.navItem}>
      <NavLink className={classes.link} to={routePath}>
        {title}
      </NavLink>
    </li>
  );
};
export default NavItem;
