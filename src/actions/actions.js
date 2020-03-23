import { ADD_LIST,
    ADD_CARD,
    REMOVE_LIST,
    REMOVE_CARD ,CLOSE_INPUT,NEW_ELEM,SET_NAME} from "./actionTypes";


export const newElem = (elemType) => ({
      type: NEW_ELEM,
      payload:elemType
});
export const setName = (elem,name) => ({
  type: SET_NAME,
  elem,
  name
});
export const addList = () => ({
  type: ADD_LIST
});

export const addCard = id => ({
  type: ADD_CARD,
  payload: id
});
export const removeList = id => ({
    type: REMOVE_LIST,
    payload: id
  });
  export const removeCard = id => ({
    type: REMOVE_CARD,
    payload: id
  });
  export const closeInout = input => ({
    type: CLOSE_INPUT,
    payload: input
  });
  
