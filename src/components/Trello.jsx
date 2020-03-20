import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Tab from './Tab'
import { connect } from "react-redux";
import { ADD_LIST, ADD_ELEMENT,REMOVE_LIST,REMOVE_ELEMENT,ADD_LIST_NAME } from "../actions/actionTypes";

const styles = StyleSheet.create({
    root: {
       
    },
    ul:{
        display:"flex",
        listStyle:"none",
    },
    li:{
        marginRight:10,
        backgroundColor:"#EBECF0",
        padding: 10,
        borderRadius:3
    },
    newTab:{
        cursor:"pointer"
    }
});

function Trello(props) {
    console.log(props.tmpListName);
    const [tmpName, setName] = useState("")
    const {writeAName,addListName,addList} = props
  return (
  <div className={css(styles.root)}>
      <div>ouech alors Trello</div>
      <ul className={css(styles.ul)}>
          <li className={css(styles.li)}>tableau1</li>
          <li className={css(styles.li)}>tableau2</li>
          {writeAName && 
           <>
           <input type="text" name="name" onChange={(e) => setName(e.target.value)} />  
           <button onClick={()=> addListName(tmpName) }>Ajouter une Liste</button>
           </>
           }
          {props.lists.length !== 0 && props.lists.map((list,i)=>{
              return <li key={i} > {list} </li>
          }) }
          <div onClick={ ()=> addList()} title="Nouveau tableau" className={css(styles.newTab)}>...</div>
      </ul>
      
    </div>
  );
}
const mapDispatchToProps = dispatch => {
    return {
      addList: () => dispatch({ type: ADD_LIST }),
      addListName: (name) => dispatch({ type: ADD_LIST_NAME,payload:name }),
      reset: () => dispatch({ type: 'RESET' })
    }
  }
const mapStateToProps = state => {
    return state
  };

export default connect(mapStateToProps,mapDispatchToProps)(Trello);