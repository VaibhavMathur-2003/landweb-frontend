import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import tailwindComponent from "../plugins/tailwind/index.js";

import {
  addEditorCommand,
  deviceManager,
  layerManager,
  panels,
  scripts,
  selectorManager,
  storageSetting,
  styleManager,
  styles,
  traitManager,
} from "./geditor_utils.js";
import { Navbars1, card1, card2, Bottombar1, Bottombar2, Footers1, Footers2, Jumbotrons1, Jumbotrons2, Navbars2, Sidebars1, Sidebars2 } from "../plugins/TailwindComp/Index.js";
// import { Bottombar1, Bottombar2, Bottombar3, Bottombar4 } from "../plugins/BottomBars/index.js";
import { cardb1, cardb2,Footersb1, Footersb2, Jumbotronsb1, Jumbotronsb2, Navbarsb2, Sidebarsb1, Sidebarsb2, Navbarsb1} from "../plugins/Bootstrap/Index.js";
// import reactComponents from "../react-components.js";
// import baseReactComponent from "../base-react-component.js";
// import MuiComponents from "../plugins/mui-components"


const geditorConfig = (assets, pageId) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");

  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");

  const editor = grapesjs.init({
    container: "#editor",
    blockManager: {
      appendTo: "#blocks",
    },
    styleManager: styleManager,
    layerManager: layerManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    assetManager: { assets: assets, upload: false },
    storageManager: storageSetting(pageId),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      tailwindComponent,
      Navbars1,
      Navbars2,
      card1,
      card2,
      // card3,
      // card4,
      // baseReactComponent,
      // reactComponents,
      // MuiComponents,
      Bottombar1,
      Bottombar2,

      // Bottombar3,
      // Bottombar4,
      Footers1,
      Footers2,
      Jumbotrons1,
      Jumbotrons2,
      Sidebars1,
      Sidebars2,
      Navbarsb1,
      Navbarsb2,
      cardb1, cardb2, Footersb1, Footersb2, Jumbotronsb1, Jumbotronsb2, Sidebarsb1, Sidebarsb2,

      gjsBlockBasic,
      // swiperComponent,
      // chartLibComponent,
    ],
    pluginsOpts: {
      tailwindComponent: {},
      navbars2: {},
      navbars1:{},
      navbars3:{},
      navbars4:{},
      leftdiv: {},
      centerDiv: {},
      rightdiv: {},
      centerHorizontalDiv: {},
      centerVerticalDiv: {},
      gjsBlockBasic: {},
      // swiperComponent: {},
      // chartLibComponent: {},
      
    },
  });

  addEditorCommand(editor);
  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    navbar.removeClass("sidenav");
    mainContent.removeClass("w-85");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });
  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.addClass("sidenav");
    mainContent.addClass("main-content");
    mainContent.addClass("w-85");

    panelTopBar.removeClass("d-none");
  });
  editor.on("component:selected", (component) => {
    const newTool = {
      icon: "fa fa-plus-square",
      title: "Check Toolbar",
      commandName: "new-tool-cmd",
      id: "new-tool",
    };

    const defaultToolbar = component.get("toolbar");
    const checkAlreadyExist = defaultToolbar.find(
      (toolbar) => toolbar.command === newTool.commandName
    );
    if (!checkAlreadyExist) {
      defaultToolbar.unshift({
        id: newTool.id,
        attributes: { class: newTool.icon, title: newTool.title },
        command: newTool.commandName,
      });
      component.set("toolbar", defaultToolbar);
    }
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 3000);
  return editor;
};

export default geditorConfig;
