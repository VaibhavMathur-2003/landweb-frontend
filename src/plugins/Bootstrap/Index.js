import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import {
  NavbarB1,
  CardB1,
  CardB2,
  CardB3,
  CardB4,
  BottomBarB1,
  BottomBarB2,
  FooterB1,
  FooterB2,
  JumbotronB1,
  JumbotronB2,
  NavbarB2,
  SidebarB1,
  SidebarB2,
} from "./Bootstrap";

export const Navbarsb1 = grapesjs.plugins.add("Navbar B1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar B1", "Bootstrap", NavbarB1);
});

export const Navbarsb2 = grapesjs.plugins.add("Navbar B2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar B2", "Bootstrap", NavbarB2);
});

export const cardb1 = grapesjs.plugins.add("Card B1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Standard B", "Bootstrap", CardB1);
});

export const cardb2 = grapesjs.plugins.add("Card B2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Horizontal B", "Bootstrap", CardB2);
});

export const cardb3 = grapesjs.plugins.add("Card B3", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Profile B", "Bootstrap", CardB3);
});

export const cardb4 = grapesjs.plugins.add("Card B4", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Shop B", "Bootstrap", CardB4);
});

export const Bottombarb1 = grapesjs.plugins.add(
  "Bottombar B1",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar B1", "Bootstrap", BottomBarB1);
  }
);

export const Bottombarb2 = grapesjs.plugins.add(
  "BottombarB2",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar B2", "Bootstrap", BottomBarB2);
  }
);

export const Footersb1 = grapesjs.plugins.add("FooterB1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Footer B1", "Bootstrap", FooterB1);
});

export const Footersb2 = grapesjs.plugins.add("FooterB2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Footer B2", "Bootstrap", FooterB2);
});

export const Jumbotronsb1 = grapesjs.plugins.add(
  "JumbotronB1",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Jumbotron B1", "Bootstrap", JumbotronB1);
  }
);

export const Jumbotronsb2 = grapesjs.plugins.add(
  "JumbotronB2",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Jumbotron B2", "Bootstrap", JumbotronB2);
  }
);

export const Sidebarsb1 = grapesjs.plugins.add(
    "SidebarB1",
    (editor, opts = {}) => {
      addPlugin(editor, opts, "Sidebar B1", "Bootstrap", SidebarB1);
    }
  );


  export const Sidebarsb2 = grapesjs.plugins.add(
    "SidebarB2",
    (editor, opts = {}) => {
      addPlugin(editor, opts, "Sidebar B2", "Bootstrap", SidebarB2);
    }
  );

