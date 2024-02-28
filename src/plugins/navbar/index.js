import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import {navbar1, navbar2, navbar3, navbar4} from "./navbars.js"

export const navbars1 = grapesjs.plugins.add("Navbar1", (editor, opts = {}) => {
  addPlugin(editor, opts, "MUI", "cNavbar1", "Navbar", navbar1);
});

export const navbars2 = grapesjs.plugins.add("Navbar2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Tailwind", "cNavbar2", "Navbar", navbar2);
});

export const navbars3 = grapesjs.plugins.add("Navbar3", (editor, opts = {}) => {
  addPlugin(editor, opts, "Chakra", "cNavbar3", "Navbar", navbar3);
});

export const navbars4 = grapesjs.plugins.add("Navbar4", (editor, opts = {}) => {
  addPlugin(editor, opts, "Bootstrap", "cNavbar4", "Navbar", navbar4);
});