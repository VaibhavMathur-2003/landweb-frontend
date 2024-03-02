import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import { BottomBar1, BottomBar2, BottomBar3, BottomBar4 } from "./bottomBars";


export const Bottombar1 = grapesjs.plugins.add("Bottombar1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Bottombar 1", "cBottombar1", "Bottombar", BottomBar1);
});

export const Bottombar2 = grapesjs.plugins.add("Bottombar2", (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar 2", "cBottombar2", "Bottombar", BottomBar2);
  });

  export const Bottombar3 = grapesjs.plugins.add("Bottombar3", (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar 3", "cBottombar3", "Bottombar", BottomBar3);
  });

  export const Bottombar4 = grapesjs.plugins.add("Bottombar4", (editor, opts = {}) => {
    addPlugin(editor, opts, "Bottombar 4", "cBottombar4", "Bottombar", BottomBar4);
  });