import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import {
  Navbar1,
  Card1,
  Card2,
  Card3,
  Card4,
  BottomBar1,
  BottomBar2,
  Footer1,
  Footer2,
  Jumbotron1,
  Jumbotron2,
  Navbar2,
  Sidebar1,
  Sidebar2,
} from "./TailwindComp";

export const Navbars1 = grapesjs.plugins.add("Navbar1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar1", "Tailwind", Navbar1);
});

export const Navbars2 = grapesjs.plugins.add("Navbar2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar2", "Tailwind", Navbar2);
});

export const card1 = grapesjs.plugins.add("Card1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Standard", "Tailwind", Card1);
});

export const card2 = grapesjs.plugins.add("Card2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Horizontal", "Tailwind", Card2);
});

export const card3 = grapesjs.plugins.add("Card3", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Profile", "Tailwind", Card3);
});

export const card4 = grapesjs.plugins.add("Card4", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card Shop", "Tailwind", Card4);
});

export const Bottombar1 = grapesjs.plugins.add(
  "Bottombar1",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar 1", "Tailwind", BottomBar1);
  }
);

export const Bottombar2 = grapesjs.plugins.add(
  "Bottombar2",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar 2", "Tailwind", BottomBar2);
  }
);

export const Footers1 = grapesjs.plugins.add("Footer1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Footer 1", "Tailwind", Footer1);
});

export const Footers2 = grapesjs.plugins.add("Footer2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Footer 2", "Tailwind", Footer2);
});

export const Jumbotrons1 = grapesjs.plugins.add(
  "Jumbotron1",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Jumbotron 1", "Tailwind", Jumbotron1);
  }
);

export const Jumbotrons2 = grapesjs.plugins.add(
  "Jumbotron2",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Jumbotron 2", "Tailwind", Jumbotron2);
  }
);

export const Sidebars1 = grapesjs.plugins.add(
    "Sidebar1",
    (editor, opts = {}) => {
      addPlugin(editor, opts, "Sidebar 1", "Tailwind", Sidebar1);
    }
  );


  export const Sidebars2 = grapesjs.plugins.add(
    "Sidebar2",
    (editor, opts = {}) => {
      addPlugin(editor, opts, "Sidebar 2", "Tailwind", Sidebar2);
    }
  );

