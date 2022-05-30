import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@material-ui/core";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Box component={"div"} style={{ padding: "0px 24px" }}>
          <Outlet />
        </Box>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
