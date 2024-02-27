import grapesjs from "grapesjs";
import {leftdiv, centerDiv, centerHorizontalDiv, centerVerticalDiv, rightdiv  } from "./divs";
import { addPlugin } from "../../pluginUtils/add";


export const leftdiv1 = grapesjs.plugins.add("Div1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Div 1", "cDiv1", "Div", leftdiv);
});

export const centerDiv1 = grapesjs.plugins.add("Div2", (editor, opts = {}) => {
  addPlugin(editor, opts, "Div 2", "cDiv2", "Div", centerDiv);
});

export const centerHorizontalDiv1 = grapesjs.plugins.add(
  "Div3",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Div 3", "cDiv3", "Div", centerHorizontalDiv);
  }
);

export const centerVerticalDiv1 = grapesjs.plugins.add(
  "Div4",
  (editor, opts = {}) => {
    addPlugin(editor, opts, "Div 4", "cDiv4", "Div", centerVerticalDiv);
  }
);

export const rightdiv1 = grapesjs.plugins.add("Div5", (editor, opts = {}) => {
  addPlugin(editor, opts, "Div 5", "cDiv5", "Div", rightdiv);
});
