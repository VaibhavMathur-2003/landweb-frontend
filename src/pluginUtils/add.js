
export const addBlock = (editor, opts, navbar) => {
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


export const addPlugin = (editor, opts = {}, label, name, category, divFunction) => {
    let options = {
      label: label,
      name: name,
      category: category,
    };
    for (let name in options) {
      if (!(name in opts)) opts[name] = options[name];
    }
    addBlock(editor, opts, divFunction);
  };