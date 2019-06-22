import React from 'react'

export default function Log(props) {


    return (
        <div>
            FOOD LOG
            <div id="food-log">Food Log: { props.foodLog }</div>
            <div id="cost-log">Cost Log: { props.costLog }</div>
            <div id="cost-total">Total Cost: { props.totalCost }</div>
        </div>
    )
}
