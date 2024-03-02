import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import { Buttons1, Buttons2, Buttons3, Buttons4 } from "./Buttons";


export const Button1 = grapesjs.plugins.add("Button1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Button 1", "cButton1", "Button", Buttons1);
});

export const Button2 = grapesjs.plugins.add("Button2", (editor, opts = {}) => {
    addPlugin(editor, opts, "Button 2", "cButton2", "Button", Buttons2);
  });

export const Button3 = grapesjs.plugins.add("Button3", (editor, opts = {}) => {
    addPlugin(editor, opts, "Button 3", "cButton3", "Button", Buttons3);
  });

  export const Button4 = grapesjs.plugins.add("Button4", (editor, opts = {}) => {
    addPlugin(editor, opts, "Button 4", "cButton4", "Button", Buttons4);
  });