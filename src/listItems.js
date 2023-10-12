import React from "react";

function ListItems({listItems,checkBoxChecked,deleteItems}){

    return(
        <>
         <ul className = "to-do-list" >
          {listItems.map((item)=>{

              return(
                <li key={item.id}>
                    <input checked={item.checkedStatus} onChange= {(e)=>{checkBoxChecked(item.id,e.target.checked)}} type="checkbox" />
                    <label>{item.itemName}</label>
                <button onClick={()=>{deleteItems(item.id)}}>Delete</button>
                </li>
              );
          })}
  
        </ul>

        </>
    );
}

export default ListItems;