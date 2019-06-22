import React, { useState, useEffect } from 'react'

function AddItemForm (props) {
    //data should display on mount
    //attempt to use useEffect in place of component did mount
    //keeps adding 0's (probably becuase it keeps calling itself on each update within submit)
    // useEffect(() => submit());

    const [foodLog, setFoodLog] = useState(["rice", "beans"]);
    const [costLog, setCostLog] = useState([.50, .50]);
    const [totalCost, setTotalCost] = useState(0);
    let foods = [...foodLog];
    let costs = [...costLog]
    let foodInputVal = "";
    //will number inputs be string?
    let costInputVal = 0;
    const handleFoodInput =(val) => {
        //capture user input
        foodInputVal = val;
    }
    const handleCostInput =(val) => {
        //capture user input
        costInputVal = val;
    }
    const submit = () => {
        //add user input to meal log
        foods.push(foodInputVal)
        setFoodLog(foods)
        //add food cost to cost log
        costs.push(costInputVal)
        setCostLog(costs)
        //set total cost by adding all cost logs
        const total = costLog.reduce((acc, curVal)=>{
            return acc+=curVal
        });
        setTotalCost(total);

        //this console log was asynchronous. why?
        console.log("foodLog: ", foodLog)
    }
  
        return (
            <div>
                <div className="form-group app-form">
                    <input onChange={props.onChange} className="form-control" type="text" placeholder="Enter food item" />
                    <input onChange={props.onChange} className="form-control" type="text" placeholder="Enter cost" />
                    <button type="submit" className="btn btn-primary" onClick={props.onClick}>Submit</button>

                </div>
                


            </div>

        )
    
}

export default AddItemForm
