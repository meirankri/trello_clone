import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Tab from './Tab'
import { connect } from "react-redux";

import { ADD_LIST,CLOSE_INPUT,  NEW_ELEM,SET_NAME } from "../actions/actionTypes";

const styles = StyleSheet.create({
    trello:{
      textAlign: 'center'
    }
    ,
    root:{
      padding:"10px ",
      "@font-face": {
        fontFamily: 'trello',
        src: "url('.../assets/fonts/trellicons/trellicons.woff') format('woff') ",
      },
      fontFamily:"trello"
    },
    
 
    newTab:{
      width: 272,
      listStyle: "none",
      backgroundColor: "hsla(0,0%,100%,.24)",
      padding:"10px 8px",
      display: "inline-block",
      verticalAlign: "top",
      color: "white",
      borderRadius:3,
      cursor:"pointer"
    },
    listInput:{
      width: 272,
      backgroundColor: "#EBECF0",
      padding:"10px 8px",
      display: "inline-block",
      verticalAlign: "top",
      
    },
    input:{
      padding: "8px 0px",
      paddingLeft: 2,
      border: "solid 2px #0079bf",
      borderRadius: 3,
      width:"100%"
    },
    button:{
      backgroundColor:"#61BD4F",
      boxShadow: "none",
      border: "none",
      color: "#fff",
      padding: 9,
      marginTop: 5,
      borderRadius: 3,
    },
    delete:{
      cursor: "pointer",
      fontSize: 20,
      marginLeft:20
    }
});

function Trello(props) {
  const {lists,writeListName,addList,newElem,setName,closeInput} = props
  let addListPhrase= lists.length === 0 ? "Ajouter une liste" :"Ajouter une autre liste"

  function handlePress(e){
    if (e.key === 'Enter') {
        addList()    
      }
  }
   
  return (
  <div className={css(styles.root)}>
          <div className={css(styles.trello)}>
            <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png" alt=""/>
          </div>      
     
      <div>
          {lists.length !== 0 && <Tab/>}
          
            {writeListName ===true ? 
           <div className={css(styles.listInput)}>
                <input onKeyDown={(e)=>handlePress(e)} className={css(styles.input)} type="text" 
                placeholder="Saisissez le titre de la liste…" name="tmpListName" autoComplete="off"
                onChange={(e) => setName(e.target.name,e.target.value)} />  
                <div>
                    <button className={css(styles.button)} onClick={()=> addList() }>Ajouter une liste</button>
                    <span className={css(styles.delete)} onClick={()=>closeInput("list")}>x
                    </span>
                </div>
           </div>
           :
           <div onClick={ ()=> newElem("list")} title="Nouveau tableau" className={css(styles.newTab)}>
            + {addListPhrase}
            
           </div>
           
         }
      </div>
      
    </div>
  );
}
const mapDispatchToProps = dispatch => {
    return {
      addList: () => dispatch({ type: ADD_LIST }),
      newElem: (elemType) => dispatch({ type: NEW_ELEM,payload:elemType }),
      setName: (elem,name) => dispatch({ type: SET_NAME,elem,name }),
      closeInput: (input) => dispatch({ type: CLOSE_INPUT,input })
      
    }
  }
const mapStateToProps = state => {
    return state
  };

export default connect(mapStateToProps,mapDispatchToProps)(Trello);