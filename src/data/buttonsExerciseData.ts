import { buttonNamesDataType, clickResultFieldsDataType } from "../types";

export const clickResultFields: clickResultFieldsDataType = {
  doubleClickMeResultField: {
    name: "doubleClickMessage",
    expectedText: "You have done a double click",
  },
  rightClickMeButtonResultField: {
    name: "rightClickMessage",
    expectedText: "You have done a right click",
  },
  clickMeButtonResultField: {
    name: "dynamicClickMessage",
    expectedText: "You have done a dynamic click",
  },
};

export const buttonNames: buttonNamesDataType = {
  doubleClickMeButtonName: "Double Click Me",
  rightClickMeButtonName: "Right Click Me",
  clickMeButtonName: "Click Me",
};
