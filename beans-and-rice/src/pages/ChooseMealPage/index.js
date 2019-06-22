import React, { useState } from 'react'
import ItemDropdown from '../../components/ItemDropDown/index'
import AddItemForm from '../../components/AddItemForm/index'
import Log from '../../components/Log'

export default function ChooseMealPage() {
    

    const [formVisible, setFormVisible] = useState(false);
    const [foods, setFoods] = useState([]);
    const [costs, setCosts] = useState([]);
    const [total, setTotal] = useState(0);

    const handleChange = (target) => {
        const dropdown = document.getElementById('dropdown')
        const selectedItem = dropdown.value
        console.log("selected item: ", selectedItem )
        //if selectedItem ==== Add Item, render addItemForm
        //else, add selection to log - call logItem
        if(selectedItem === "ADD FOOD ITEM"){
            //render addItem form
            setFormVisible(true)
        }
        else console.log("else...")
        // logItem(selectedItem)
        
    }

    let content;
    if (formVisible) {
                content = <AddItemForm />;
               
             } else {
                content = <ItemDropdown handleChange = {(e) => handleChange(e.target)}/>;
             }

    return (
                <div>
                    { content }
                    <Log foodLog={ foods } costLog={ costs } totalCost= { total }/>
                </div>
            )

    
}



