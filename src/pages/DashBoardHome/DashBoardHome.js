import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import AddService from "./AddService/AddService";
import MYOrders from "./MyOrders/MYOrders";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AllOrders from "./AllOrders/ALLOrders";
import DashBoardStart from "./DasBoardStart/DashBoardStart";
import Review from "./Review/Review";
import ManageProduct from "./ManageProducts/ManageProduct";

const drawerWidth = 200;

function DashBoardHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Button onClick={logout} color="inherit">
        Logout
      </Button>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Login as:{user.displayName}
      </Typography>
      {!admin && (
        <Box>
          <Link to={`${url}`}>
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to={`${url}/myOrders`}>
            <Button color="inherit">Manage My Orders</Button>
          </Link>
          <Link to={`${url}/pay`}>
            <Button color="inherit">Pay</Button>
          </Link>
          <Link to={`${url}/review`}>
            <Button color="inherit">Give Review</Button>
          </Link>
        </Box>
      )}
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addService`}>
            <Button color="inherit">Add Car</Button>
          </Link>
          <Link to={`${url}/allOrders`}>
            <Button color="inherit">Manage Orders</Button>
          </Link>

          <Link to={`${url}/manageProducts`}>
            <Button color="inherit">manage Products</Button>
          </Link>
        </Box>
      )}
      )
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashBoardStart />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </AdminRoute>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MYOrders></MYOrders>
          </Route>
          <AdminRoute path={`${path}/addService`}>
            <AddService />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProduct />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

export default DashBoardHome;
