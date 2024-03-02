import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import tailwindComponent from "../plugins/tailwind/index.js";
// import swiperComponent from "../plugins/swiper/index.js";
import {navbars1, navbars2, navbars3, navbars4} from "../plugins/navbar/index.js"

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
import { centerDiv1, centerHorizontalDiv1, leftdiv1, rightdiv1, centerVerticalDiv1 } from "../plugins/divs/index.js";
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from "../plugins/Cards/index.js";
import { Bottombar1, Bottombar2, Bottombar3, Bottombar4 } from "../plugins/BottomBars/index.js";
import { Button1, Button2, Button3, Button4 } from "../plugins/Buttons/index.js";
import { Table1, Table2, Table3 } from "../plugins/Tables/index.js";


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
      navbars1,
      navbars2,
      navbars3,
      navbars4,
      Card1,
      Card2,
      Card3,
      Card4,
      Card5,
      Card6,
      Card7,
      Bottombar1,
      Bottombar2,
      Bottombar3,
      Bottombar4,
      Button1,
      Button2,
      Button3,
      Button4,
      Table1,
      Table2,
      Table3,
      leftdiv1,
      centerDiv1,
      rightdiv1,
      centerHorizontalDiv1,
      centerVerticalDiv1,
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
    navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });
  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.addClass("sidebar");
    mainContent.addClass("main-content");
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
  }, 1000);
  return editor;
};

export default geditorConfig;
