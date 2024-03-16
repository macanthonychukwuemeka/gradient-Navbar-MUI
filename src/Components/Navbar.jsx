import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./Drawer";
// import { useTheme } from "@emotion/react";
// MAke sure not to import emotion/react Usetheme while importing useTheme
const Navbar = ({ links }) => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <AppBar
      sx={{
        backgroundImage:
          "  linear-gradient(90deg, rgba(255,0,98,1) 0%, rgba(9,10,121,1) 40%, rgba(249,0,255,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid items xs={1} />
            <Grid items xs={3}>
              <Box>
                <Button
                  sx={{ background: "rgba(255,0,98,1)", marginLeft: "auto" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(255,0,98,1)" }}
                  variant="contained"
                >
                  Sign in
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
