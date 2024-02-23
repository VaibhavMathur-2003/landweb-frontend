/* eslint-disable import/no-anonymous-default-export */
import { navbar2, navbar1 } from "./navbars";

const addNavbar = (editor, opts, navbar) => {
  const bm = editor.BlockManager;
  const style = navbar?.style;
  bm.add(opts.name, {
    label: navbar.label +  
      `<div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
    category: opts.category,
    content: navbar?.content + style,
  });
};

export const nav2 = (editor, opts = {}) => {
  addNavbar(editor, opts, navbar2);
};

export const nav1 = (editor, opts = {}) => {
  addNavbar(editor, opts, navbar1);
};

