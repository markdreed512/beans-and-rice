import React, { useState, useEffect } from 'react'

function AddItemForm () {
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
                    <input onChange={(e)=> handleFoodInput(e.target.value)} className="form-control" type="text" placeholder="Enter food item" />
                    <input onChange={(e)=> handleCostInput(e.target.value)} className="form-control" type="text" placeholder="Enter cost" />
                    <button type="submit" class="btn btn-primary" onClick={()=>submit()}>Submit</button>

                </div>
                <div id="temp-food-log">Food Log: { foodLog }</div>
                <div id="temp-cost-log">Cost Log: { costLog }</div>
                <div id="temp-cost-total">Total Cost: { totalCost }</div>


            </div>

        )
    
}

export default AddItemForm
