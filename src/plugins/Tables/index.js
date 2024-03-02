import grapesjs from "grapesjs";
import { addPlugin } from "../../pluginUtils/add";
import { Tables1, Tables2, Tables3 } from "./tables";


export const Table1 = grapesjs.plugins.add("Table1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Table 1", "cTable1", "Table", Tables1);
});

export const Table2 = grapesjs.plugins.add("Table2", (editor, opts = {}) => {
    addPlugin(editor, opts, "Table 2", "cTable2", "Table", Tables2);
  });

export const Table3 = grapesjs.plugins.add("Table3", (editor, opts = {}) => {
    addPlugin(editor, opts, "Table 3", "cTable3", "Table", Tables3);
  });