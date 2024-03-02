import grapesjs from "grapesjs";
import {card1, card2, card3, card4, card5, card6, card7 } from "./cards";
import { addPlugin } from "../../pluginUtils/add";


export const Card1 = grapesjs.plugins.add("Card1", (editor, opts = {}) => {
  addPlugin(editor, opts, "Card 1", "cCard1", "Card", card1);
});

export const Card2 = grapesjs.plugins.add("Card2", (editor, opts = {}) => {
    addPlugin(editor, opts, "Card 2", "cCard2", "Card", card2);
  });

  export const Card3 = grapesjs.plugins.add("Card3", (editor, opts = {}) => {
    addPlugin(editor, opts, "Card 3", "cCard3", "Card", card3);
  });

  
  export const Card4 = grapesjs.plugins.add("Card4", (editor, opts = {}) => {
    addPlugin(editor, opts, "Card 4", "cCard4", "Card", card4);
  });

    
  export const Card5 = grapesjs.plugins.add("Card5", (editor, opts = {}) => {
    addPlugin(editor, opts, "Card 5", "cCard5", "Card", card5);
  });


  export const Card6 = grapesjs.plugins.add("Card6", (editor, opts = {}) => {
    addPlugin(editor, opts, "Card 6", "cCard6", "Card", card6);
  });

  export const Card7 = grapesjs.plugins.add("Card7", (editor, opts = {}) => {
    addPlugin(editor, opts, "Toast", "cCard7", "Card", card7);
  });