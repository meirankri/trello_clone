import { ADD_LIST,
    ADD_ELEMENT,
    REMOVE_LIST,
    REMOVE_ELEMENT ,ADD_LIST_NAME} from "./actionTypes";



export const addList = () => ({
  type: ADD_LIST
});
export const addListName = name => ({
  type: ADD_LIST_NAME,
  payload: name
});
export const addElement = name => ({
  type: ADD_ELEMENT,
  payload: name
});
export const removeList = id => ({
    type: REMOVE_LIST,
    payload: id
  });
  export const removeElement = id => ({
    type: REMOVE_ELEMENT,
    payload: id
  });
