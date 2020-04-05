import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import CheckboxGroup from 'react-checkbox-group';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';
class DynamicForm extends Component {

    state = {

    }
    constructor(props) {
        super(props)
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state)
    }
    handleCheckboxgroupChange = (updatedUsecaseCBState) => {
        this.setState({
            checkboxes: updatedUsecaseCBState,
        });
    };


    renderForm = () => {
        let model = this.props.model.Form.data;
        let form = model.map((element) => {
            let key = element.key;
            let label = element.label;
            let props = element.props || {};
            let type = element.type;
            let values = element.values || {};
            let checkboxes = element.checkboxes || {};

            if (type == "text" || type == "number") {
                return (
                    <div className="form-group" key={key}>
                        <label className="form-label" key={"label" + key}
                            htmlFor={key}>
                            {label}
                        </label>
                        <input className="form-input" {...props}
                            ref={(keyin) => { this[key] = keyin }}
                            type={type}
                            key={"input" + key}
                        >
                        </input>
                    </div>
                )
            }
            if (type == "textarea") {
                return (<div className="form-group" key={key}>
                    <label className="form-label" key={"label" + key}
                        htmlFor={key}>
                        {label}
                    </label>
                    <textarea className="form-input"{...props}
                        ref={(keyin) => { this[key] = keyin }}
                        key={"input" + key}
                    >
                    </textarea>
                </div>)
            }
            if (type == "dropdown") {
                return (<div className="form-group" key={key}>
                    <label className="form-label" key={"label" + key}
                        htmlFor={key}>
                        {label}
                    </label>
                    <select className="form-input" {...props}>
                        <option value="">
                            select an option
                            </option>
                        {values.map(values =>
                            <option value={values}>
                                {values}
                            </option>)}

                    </select>
                </div>)
            }

            if (type == "checkbox") {

                return (<div key={key}>
                    <label key={"label" + key}
                        htmlFor={key}>
                        {label}
                    </label>

                    <CheckboxGroup
                        checkboxes={checkboxes}
                        onCheckboxGroupChange={this.handleCheckboxgroupChange}
                    />

                </div>)
            }
        })
        return form
    }

    render() {
        let title = this.props.model.Form.title || "Dynamic Form";

        return (
            <div>
                <h3>{title}</h3>
                <form className="dynamic-form" onSubmit={(e) => { this.onSubmit(e) }}>
                    {this.renderForm()}
                    <div className="form-group">
                        <button className="form-input" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default DynamicForm;