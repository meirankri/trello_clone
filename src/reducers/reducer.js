import { ADD_LIST, ADD_CARD,REMOVE_CARD,REMOVE_LIST ,NEW_ELEM,SET_NAME, CLOSE_INPUT} from "../actions/actionTypes";

    const initialState = {
        lists: [],
        tmpListName:'',
        tmpCardName:"",
        writeListName: false,
        cardInt:0,
        listInt:0
       
      };
      
      export default function(state = initialState, action) {
        switch (action.type) {
          case NEW_ELEM: {
            if(action.payload === "list"){
              return {...state,writeListName:true }
            }else{
              for(let i in state.lists){
                  if(state.lists[i].id === action.payload){
                    let newLists = state.lists.map(list => {return {...list}})
                    newLists.find(list => list.id === action.payload).writeCardName = true;                    
                    return {
                      ...state, lists :[...newLists]
                  }
                }
              }
            }
            return {...state };
          }
          case CLOSE_INPUT:{
            if(action.input === "list"){
              return {...state, writeListName: false,tmpListName:"" }
            }
            let newLists = state.lists.map(list => {return {...list}})
            newLists.find(list => list.id === action.input).writeCardName = false
            return {...state, lists :[...newLists], tmpCardName : ""}
          }
          case SET_NAME:{
            return {...state, [action.elem]: action.name }
          }
          case ADD_LIST: {
            if(state.tmpListName.length !== 0 ){
              let newList = { name:state.tmpListName ,
                id:state.listInt,
                writeCardName:false,
                cardList:[]
              }
              return {...state, lists : [...state.lists, newList],  
                      writeListName:false,tmpListName:"", listInt: state.listInt + 1 }
            }
            return {...state}
          }
          case ADD_CARD: {
            console.log(state);
            console.log("after");
            
            if(state.tmpCardName.length !== 0 ){
              
              let newLists = state.lists.map(list => {return {...list}})
              newLists.find(list => list.id === action.payload).cardList.push( { 
                name:state.tmpCardName ,
                id:state.cardInt
                //id:state.lists[action.payload].cardList.length,
              }   )
              newLists.find(list => list.id === action.payload).writeCardName = false
              
              return {...state, lists :[...newLists], cardInt: state.cardInt+ 1}
            }
            return {...state}
          }
          case REMOVE_LIST:{
            let confirm = window.confirm("Vous etes sur de supprimé cette liste ?")
            if(confirm){
              let newLists = state.lists.map(list => {return {...list}})
              newLists.splice(action.payload,1)
             return {...state, lists: [...newLists]}
            }
            return {...state}
            
          }
          case REMOVE_CARD:{
           let confirm = window.confirm("Vous etes sur de supprimé cette carte ?")
           if(confirm){
            let newLists = state.lists.map(list => {return {...list}})
            newLists[action.idList].cardList.splice(action.idCard,1)            
            return {...state, lists: [...newLists]}
           }
           return {...state}
          }
          
          
          default:
            return state;
        }
      }
      