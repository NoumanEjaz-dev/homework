import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, SvgIcon } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Items = [
  {
    title: "Aboutme",
    path: "/",
    // icon: <HomeIcon color="primary" />
    icon: (
      <SvgIcon style={{ color: "white" }}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    ),
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    // icon: <HomeIcon color="primary" />
    icon: (
      <SvgIcon style={{ color: "white" }}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    ),
  },
  {
    title: "Contact",
    path: "/contact",
    icon: (
      <SvgIcon style={{ color: "white" }}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    ),
  },
  {
    title: "Resume",
    path: "/resume",
    icon: (
      <SvgIcon style={{ color: "white" }}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    ),
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
    backgroundColor: "#D09A0A",
    "& span": {
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "22px",
      fontFamily: "ROBOTO",
      color: "#ffffff",
    },
  },
  SidenavList: {
    marginTop: "30px",
  },
});

const DrawerList = ({ anchor, toggleDrawer }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const routeHandler = (path) => {
    navigate(path);
  };
  return (
    <div
      className={classes.list}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Items.map((text, index) => (
          <ListItem
            className={classes.SidenavList}
            button
            key={text.title}
            onClick={() => {
              routeHandler(text.path);
            }}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DrawerList;
