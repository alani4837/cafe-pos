import { SET_MENUS } from "../actionTypes";

const menuItems = [
  { id: 1, name: "Espresso"},
  { id: 2, name: "Freddo Espresso" },
  { id: 3, name: "Latte" },
  { id: 4, name: "Tea" }
];

export default (state = menuItems, action) => {
  switch (action.type) {
    case SET_MENUS:
      return action.payload.menus || state;
    default:
      return state;
  }
};
