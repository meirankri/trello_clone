import { ADD_LIST, ADD_ELEMENT,REMOVE_LIST,REMOVE_ELEMENT ,ADD_LIST_NAME} from "../actions/actionTypes";

    const initialState = {
        lists: [],
        tmpListName:'',
        writeAName: false
      };
      
      export default function(state = initialState, action) {
        switch (action.type) {
          case ADD_LIST: {

            return {...state , writeAName:true};
          }
          case ADD_LIST_NAME: {

            return {...state , tmpListName:action.payload};
          }
          
          default:
            return state;
        }
      }
      