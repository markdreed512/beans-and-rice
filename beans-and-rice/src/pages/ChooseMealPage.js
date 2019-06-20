import React, { useState } from 'react'
import ItemDropdown from '../components/ItemDropdown'
import AddItemForm from '../components/AddItemForm'


export default function ChooseMealPage() {

    const [formVisible, setFormVisible] = useState(false);

    let content;
    if (formVisible) {
                content = <AddItemForm />;
               
             } else {
                content = <ItemDropdown />;
             }

    return (
                <div>
                    { content }
                </div>
            )

    // state = {
    //     formVisible: true
    // }

    // render() {
    //     let content;
    //     if (this.state.formVisible) {
    //         content = <AddItemForm />;
           
    //      } else {
    //         content = <ItemDropdown />;
    //      }

    //     return (
    //         <div>
    //             { content }
    //         </div>
    //     )
    // }
}



