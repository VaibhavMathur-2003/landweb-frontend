export const leftdiv = {
  content: `
  <div
      role="menubar"
      class="flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm"
      tabindex="0"
      data-orientation="horizontal"
      style="outline: none;"
    >
      <button
        type="button"
        role="menuitem"
        id="radix-:r6c:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        File
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6g:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Edit
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6k:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        View
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6o:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Profiles
      </button>
    </div>`,
  style: `<style>
     
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const centerVerticalDiv = {
  content: `
    <div class="container">
      <div class="center-vertical">Center Vertical</div>
    </div>`,
  style: `<style>
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        border: 1px solid #000;
      }
      .center-vertical {
        /* Styles for vertically centered content */
      }
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const centerHorizontalDiv = {
  content: `
    <div class="container">
      <div class="center-horizontal">Center Horizontal</div>
    </div>`,
  style: `<style>
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        border: 1px solid #000;
      }
      .center-horizontal {
        /* Styles for horizontally centered content */
      }
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const rightdiv = {
  content: `
    <div class="container">
      <div class="right">Right</div>
    </div>`,
  style: `<style>
      .container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100px;
        border: 1px solid #000;
      }
      .right {
        /* Styles for content on the right */
      }
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};

export const centerDiv = {
  content: `
  <div class="divr">
  <div></div>
</div>
`,
  style: `<style>
  .divr {
    display: table;
    padding: 10px;
    width: 100%;
    text-align: center; /* Center the content horizontally */
    vertical-align: middle; /* Center the content vertically */
  }
  
  .divc {
    width: 100%;
    display: table-cell;
    height: 75px;
    text-align: center; /* Center the content horizontally */
    vertical-align: middle; /* Center the content vertically */
  }
      </style>`,
  label: `<i class="fa fa-arrows-h"></i>`,
};
