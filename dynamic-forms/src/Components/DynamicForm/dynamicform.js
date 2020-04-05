import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class DynamicForm extends Component {

    state = {
        checkBoxVal: this.props.model.Form.data.filter((key) => {
            return key.key == "checkbox"
        })[0].values
    }
    constructor(props) {
        super(props)
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state)
    }
    handleAllChecked = (event) => {
        let checkBoxVal = this.state.checkBoxVal
        checkBoxVal.forEach(e => e.isChecked = event.target.checked)
        this.setState({ checkBoxVal: checkBoxVal })
    }

    handleCheckChieldElement = (event) => {
        let checkBoxVal = this.state.checkBoxVal;
        checkBoxVal.forEach(e => {
            if (e.value === event.target.value)
                e.isChecked = event.target.checked
        })
        this.setState({ checkBoxVal: checkBoxVal })
    }
    renderForm = () => {
        let model = this.props.model.Form.data;
        let form = model.map((element) => {
            let key = element.key;
            let label = element.label;
            let props = element.props || {};
            let type = element.type;
            let values = element.values || {};
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
                    <input type="checkbox" {...props} onChange={this.handleAllChecked} value="checkedall" /> Check / Uncheck All
                    <ul>
                        {values.map((e, index) => {
                            return (
                                <li>
                                    <input onChange={this.handleCheckChieldElement} type="checkbox"
                                        checked={e.isChecked} value={e.value} key={"input" + key} /> {e.value}
                                </li>)
                        })
                        }
                    </ul>
                </div >)

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