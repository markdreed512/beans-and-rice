import React, { useState } from 'react'

let ingredients = ['CHOOSE','Beans', 'Rice', 'ADD FOOD ITEM'];
let count = 0;



function ItemDropdown(props){
    const [foods, setFoods] = useState(ingredients);
    const logItem = item => {
        count++
        console.log("this passed in: " + item + count)
      };
    const populateChoices = (arr) => {
        return (
            arr.map((item, index) => {
            return <option key= { index } value= { item }>{ item }</option>
        })
        )
    }
    const handleChange = (target) => {
        const dropdown = document.getElementById('dropdown')
        const selectedItem = dropdown.value
        console.log("selected item: ", selectedItem )
        
        
    }
    let test = populateChoices(foods)
    console.log("populuateTest: ",test)

        return (

            <div>
                <select id="dropdown" onChange= {(e) => handleChange(e.target)}>
                    { populateChoices(foods) }
                </select>
            </div>

        )
    
}

export default ItemDropdown
