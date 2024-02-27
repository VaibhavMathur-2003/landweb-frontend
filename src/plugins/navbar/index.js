import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import {navbar1, navbar2} from "./navbars.js"

export const navbars1 = grapesjs.plugins.add("Navbar1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar 1", "cNavbar1", "Navbar", navbar1);
});

export const navbars2 = grapesjs.plugins.add("Navbar2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Navbar 2", "cNavbar2", "Navbar", navbar2);
});