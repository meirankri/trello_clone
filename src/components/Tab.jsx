import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    
    li:{
        marginRight:10,
        backgroundColor:"#EBECF0",
        padding: 10,
        borderRadius:3
    }
});

function Tab(props) {
  const [listName, setName] = useState('')
  return (
    <>
     <li className={css(styles.li)}>
        {props.name} 
        <input type="text" value="nom tab" />
        <button>Ajouter liste</button>
      </li>
    </>
  )
  
}

export default Tab;
