import "./App.css"
import React, {useState} from "react"
import SubmitForm from "./form"
import ListItemsModule from "./listItems"

function App(){


  const [listItems, setListItems] = useState([]);

  function addToList(listText){
    setListItems((currentListItem)=>{
    
      return[

        ...currentListItem,{id:crypto.randomUUID() , itemName: listText, checkedStatus: false}
        ,
      ]
      
    });
  }

  function checkBoxChecked(id,checkedStatus){


    setListItems((currentListItems)=>{

      
    return currentListItems.map((nowItems)=>{
        if(nowItems.id == id){
      
          return {...nowItems , checkedStatus};
        }
        return nowItems;
      })
    });
  }

  function deleteItems(id){

    setListItems((currentItem)=>{

      return currentItem.filter((item)=>{return item.id !== id});
    });
  }


  return(
    <div className="main-container">
      <SubmitForm setListItems = {addToList}/>
      <ListItemsModule listItems = {listItems} checkBoxChecked = {checkBoxChecked} deleteItems = {deleteItems}/>
    </div>
  );
}

export default App;