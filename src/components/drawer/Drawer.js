import React from "react";
import Drawer from "@material-ui/core/Drawer";
import DrawerList from "./DrawerList";

export default function TemporaryDrawer({ toggleDrawer, isOpen }) {
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer("left", false)}
        >
          <DrawerList anchor={"left"} toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
