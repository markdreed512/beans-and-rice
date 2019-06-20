import React, { useState } from 'react'

let ingredients = ['Beans', 'Rice', 'ADD FOOD ITEM'];
let count = 0;



function ItemDropdown(){
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
    let test = populateChoices(foods)
    console.log("populuateTest: ",test)

        return (

            <div>
                <select onChange= {logItem("test")}>
                    { populateChoices(foods) }
                </select>
            </div>

        )
    
}

export default ItemDropdown
