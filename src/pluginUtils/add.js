
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
      media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`
    });
  };


export const addPlugin = (editor, opts = {}, label, category, divFunction) => {
    let options = {
      label: label,
      name: label,
      category: category,
      media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`
    };
    for (let name in options) {
      if (!(name in opts)) opts[name] = options[name];
    }
    addBlock(editor, opts, divFunction);
  };