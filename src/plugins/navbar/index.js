import grapesjs from "grapesjs";
import { nav1, nav2 } from "./blocks";

export const navbar1 = grapesjs.plugins.add("nav1", (editor, opts = {}) => {
  let options = {
    label: "Navbar 1",
    name: "cnavbar2",
    category: "Navbar",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  nav1(editor, options);
  
});

export const navbar2 = grapesjs.plugins.add("nav2", (editor, opts = {}) => {
  let options = {
    label: "Navbar 2",
    name: "cnavbar",
    category: "Navbar",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  nav2(editor, options);
  
});

