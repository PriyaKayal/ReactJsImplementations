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
            let i = 0;
            if (type == "text" || type == "number") {
                return (
                    <div className="form-group" key={key}>
                        <div class="row">
                            <div class="col-25">
                                <label className="form-label" key={"label" + key}
                                    htmlFor={key}>
                                    {label}
                                </label>
                            </div>
                            <div class="col-75">
                                <input className="form-input" {...props}
                                    ref={(keyin) => { this[key] = keyin }}
                                    type={type}
                                    key={"input" + key}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                )
            }
            if (type == "textarea") {
                return (<div className="form-group" key={key}>
                    <div class="row">
                        <div class="col-25">
                            <label className="form-label" key={"label" + key}
                                htmlFor={key}>
                                {label}
                            </label>
                        </div>
                        <div class="col-75">
                            <textarea className="form-input"{...props}
                                ref={(keyin) => { this[key] = keyin }}
                                key={"input" + key}
                            >
                            </textarea>
                        </div>
                    </div>
                </div>)
            }
            if (type == "dropdown") {
                return (<div className="form-group" key={key}>
                    <div class="row">
                        <div class="col-25">
                            <label className="form-label" key={"label" + key}
                                htmlFor={key}>
                                {label}
                            </label>
                        </div>
                        <div class="col-75">
                            <select className="form-input" {...props}>
                                <option className="form-label" value="">
                                    select an option
                            </option>
                                {values.map(values =>
                                    <option className="form-label" value={values}>
                                        {values}
                                    </option>)}
                            </select>
                        </div>
                    </div>
                </div>)
            }

            if (type == "checkbox") {
                return (<div className="form-group" key={key}>
                    <div class="row">
                        <div class="col-25">
                            <label className="form-label" key={"label" + key}
                                htmlFor={key}>
                                {label}
                            </label>
                        </div>
                        <div class="col-75">
                            <div className="check-label">
                                <input type="checkbox" {...props} onChange={this.handleAllChecked} value="checkedall" /> Check / Uncheck All</div>
                            <ul className="default">
                                <div class="col-75">
                                    {values.map(e =>
                                        <li>
                                            <div className="check-label">
                                                <input className="form-input" onChange={this.handleCheckChieldElement} type="checkbox"
                                                    checked={e.isChecked} value={e.value} key={"input" + key} className="check-label" />
                                                {e.value}</div>
                                        </li>)
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>
                </div >)

            }
        })
        return form

    }
    render() {
        let title = this.props.model.Form.title || "Dynamic Form";
        return (
            <div>
                <div class="container" >
                    <form className="dynamic-form" onSubmit={(e) => { this.onSubmit(e) }}>
                        <div className="form-group">
                            <div className="title" >{title} <button className="button" type="submit">Create </button></div>
                            {this.renderForm()}

                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default DynamicForm;