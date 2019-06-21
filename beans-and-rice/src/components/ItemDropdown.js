import React, { useState } from 'react'

let ingredients = ['CHOOSE','Beans', 'Rice', 'ADD FOOD ITEM'];
let count = 0;



function ItemDropdown(props){
    const [foods, setFoods] = useState(ingredients);
    const logItem = item => {
        count++
        console.log("item to log: " + item + count)
      };
    const populateChoices = (arr) => {
        return (
            arr.map((item, index) => {
            return <option key= { index } value= { item }>{ item }</option>
        })
        )
    }
    let test = populateChoices(foods)
    console.log("populuateTest: ",test)

        return (

            <div>
                <select id="dropdown" onChange= {props.handleChange}>
                    { populateChoices(foods) }
                </select>
            </div>

        )
    
}

export default ItemDropdown
