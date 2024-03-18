import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const DrawerComp = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(9,10,121,1)" },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              onClick={() => setIsOpen(false)}
              key={index}
              divider
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        //marginLeft: auto, to set the menu-bar to the left side of the screen
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
