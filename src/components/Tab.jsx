import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from "react-redux";
import { ADD_LIST, ADD_CARD,REMOVE_LIST,REMOVE_CARD, NEW_ELEM,SET_NAME ,CLOSE_INPUT} from "../actions/actionTypes";

const styles = StyleSheet.create({
    
    list:{
      marginRight:10,
      listStyle: "none",
      backgroundColor:"#EBECF0",
      borderRadius:3,
      width: 272,
      display: "inline-block",
      verticalAlign: "top",
    },
    listName:{
      padding: "10px 10px",
      color: "#172B4D",
      display:"flex",
      justifyContent: "space-between",
      fontWeight:"500"
    },
    cardList:{
      listStyle:"none"
    },
    card:{
      backgroundColor: "white",
      borderRadius: 3,
      margin: "8px 7px",
      minHeight: 20,
      padding: 5,
      color: "#55637C",
      display:"flex",
      justifyContent: "space-between",
    },
    addCard:{
      backgroundColor: "initial",
      cursor: "pointer",
      color: "grey",
    },
    listInput:{
      width: "100%",
      display: "inline-block",
      verticalAlign: "top",
      
    },
    input:{
      width: 253,
      padding: "5px 0 5px 5px",
      overflow: "auto",
      height: 41,
      backgroundColor: "white",
      borderRadius: 3,
      margin: "0 7px",
      minHeight: 20,
      color: "#55637C",
      border:"none",
      outline:"none"

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
    },
    buttonCardContainer:{
      padding: "0px 0px 12px 7px"

    }
    
});

function Tab(props) {

  const {lists,newElem,setName,addCard,removeList,removeCard,closeInput} = props
  function handlePress(e,i){
    if (e.key === 'Enter') {
        addCard(i)    
      }
  }
  
  return (
    <>
    
    {lists.map((list,i)=>{
     return <div className={css(styles.list)} id={list.id} key={i}>
       <div className={css(styles.listName)}>
         <span>{list.name}</span> 
         <span className={css(styles.delete)} onClick={()=>{removeList(i)}}>x</span>
      </div>
     
     <div className={css(styles.cardList)} >      
        {list.cardList.length !== 0 && list.cardList.map((card,id)=>{
          return <div  className={css(styles.card)} id={id} key={id}>
                    <span>{card.name}</span> 
                    <span className={css(styles.delete)} onClick={()=>{removeCard(id,i)}}> x</span>
                 </div>
        }) }
        {list.writeCardName === true ?
        <div className={css(styles.listInput)}>
            <textarea onKeyDown={(e )=>handlePress(e,i)} className={css(styles.input)} type="text" 
            placeholder="Saisissez un titre pour cette carte" name="tmpCardName" 
            onChange={(e) => setName(e.target.name,e.target.value)} />  
            <div className={css(styles.buttonCardContainer)}>
                <button className={css(styles.button)} onClick={()=> addCard(i) }>Ajouter une carte</button>
                <span className={css(styles.delete)} onClick={()=>closeInput(i)}>x</span>

            </div>
        </div>
        :<div className={css(styles.card,styles.addCard)} 
        onClick={ ()=> newElem(list.id)} 
        title="Nouveau tableau" 
        >+ Ajouter une carte
        </div>}
     </div>
      </div>
      
    })}
     
    </>
  )
  
}

const mapDispatchToProps = dispatch => {
  return {
    addList: () => dispatch({ type: ADD_LIST }),
    newElem: (elemType) => dispatch({ type: NEW_ELEM,payload:elemType }),
    setName: (elem,name) => dispatch({ type: SET_NAME,elem,name }),
    addCard: (id) => dispatch({ type: ADD_CARD,payload:id }),
    removeList: (id) => dispatch({ type: REMOVE_LIST,payload:id }),
    removeCard: (idCard, idList) => dispatch({ type: REMOVE_CARD,idCard,idList }),
    closeInput: (input) => dispatch({ type: CLOSE_INPUT,input })

    
  }
}
const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps,mapDispatchToProps)(Tab);