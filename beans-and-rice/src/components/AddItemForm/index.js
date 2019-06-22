import React, { useState } from 'react'

function AddItemForm () {
    

    const [foodLog, setFoodLog] = useState(["rice", "beans"])
    let foods = [...foodLog]
    let inputVal = "";
    const handleChange =(val) => {
        //capture user input
        inputVal = val;
    }
    const submit = () => {
        //add user input to meal log
        foods.push(inputVal)
        setFoodLog(foods)
        //this console log was asynchronous. why?
        console.log("foodLog: ", foodLog)
    }
  
        return (
            <div>
                <div className="form-group app-form">
                    <input onChange={(e)=> handleChange(e.target.value)} className="form-control" type="text" placeholder="Enter food item" />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                        <label className="form-check-label" for="exampleRadios1">
                            $
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" for="exampleRadios2">
                            $$
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                        <label className="form-check-label" for="exampleRadios3">
                            $$$
                                    </label>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={()=>submit()}>Submit</button>

                </div>
                <div id="temp-food-log">Food Log: { foodLog }</div>

            </div>

        )
    
}

export default AddItemForm
