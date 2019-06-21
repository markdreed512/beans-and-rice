import React, { Component } from 'react'

class AddItemForm extends Component {

    submit = () => {
        alert('submitted')
    }
    render() {
        return (
            <div>
                <div className="form-group app-form">
                    <input className="form-control" type="text" placeholder="Input" value="Input" />
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
                    <button type="submit" class="btn btn-primary">Submit</button>

                </div>

            </div>

        )
    }
}

export default AddItemForm
