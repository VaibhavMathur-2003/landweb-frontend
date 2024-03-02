export const leftdiv = {
  content: `
    <div class="container">
      <div class="left">Left</div>
    </div>`,
  style: `<style>
      .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100px;
        border: 1px solid #000;
      }
      .left {
        /* Styles for content on the left */
      }
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
