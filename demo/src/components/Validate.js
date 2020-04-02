import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
const initialState = {
    name: "",
    description: "",
    jdbcconnection: "",
    sqlstatement: "",
    timeout: "",
    nameError: "",
    timeoutErrorMessage: '',
    namenullErrorMessage: '',
    timeoutnullErrorMessage: '',
    descriptionErrorMessage: '',
    descriptionnullErrorMessage: '',
    jdbcnullErrorMessage: '',
    jdbcconnectionErrorMessage: '',
    sqlstatementnullErrorMessage: '',
    sqlstatementErrorMessage: ''
}
class Validate extends Component {
    state = initialState;
    handleChange = event => {
        let isCheckbox = event.target.type === "checkbox";
        let numerr = '';
        let alphanumerr = '';
        let alphabeterror = '';
        let namenullError = '';
        let timeoutnullError = '';
        let descriptionnullError = '';
        let jdbcnullError = '';
        let jdbcerr = '';
        let sqlerr = '';
        let sqlnullError = '';

        if (event.target.name === "name") {
            if (event.target.value != '') {
                if (event.target.value != "" && (!event.target.value.match(/^[a-z]{5,12}$/i))) {
                    alphabeterror = <strong>Name must be Alphabetic-without space and min 5 characters to max 12 characters </strong>;
                }
            } else {
                namenullError = <strong>Name field is empty</strong>
                console.log(event.target.value);
            }

        }
        if (event.target.name === "description") {
            if (event.target.value != '') {
                if (event.target.value != "" && (!event.target.value.match(/^[ A-Za-z0-9_@./#&+-=$!*%():?"']*$/))) {
                    alphanumerr = <strong>Description must be a Alphanumeric with allowed special characters like _@./#&+-=$!*%():"'?</strong>;
                }
            } else {
                descriptionnullError = <strong>Description field is empty</strong>
                console.log(event.target.value);
            }
        }
        if (event.target.name === "jdbcconnection") {
            if (event.target.value != '') {
                if (event.target.value != "" && (!event.target.value.match(/^[ A-Za-z0-9_@./#&+-=$!|*:;,()?"']*$/))) {
                    jdbcerr = <strong>JDBCConnection must be a Alphanumeric with allowed special characters like _@./#&+-=$!|*:;,()?"'</strong>;
                }
            } else {
                jdbcnullError = <strong>JDBCConnection field is empty</strong>
                console.log(event.target.value);
            }
        }
        if (event.target.name === "sqlstatement") {
            if (event.target.value != '') {
                if (event.target.value != "" && (!event.target.value.match(/^[ A-Za-z0-9$&+,:;=?@#|'<>{}.-^*()%!]*$/))) {
                    sqlerr = <strong>SQLStatement must be a Alphanumeric with allowed special characters like _@./#&+-=$!|*:;,()?"'</strong>;
                }
            }
            else {
                sqlnullError = <strong>SQLStatement field is empty</strong>
                console.log(event.target.value);
            }

        }
        if (event.target.name === "timeout") {
            if (event.target.value != '') {
                if (event.target.value != "" && (!event.target.value.match(/^[0-9]+$/))) {
                    numerr = <strong>Timeout must be a number</strong>;
                }
            } else {
                timeoutnullError = <strong>Timeout field is empty</strong>
                console.log(event.target.value);
            }
        }
        this.setState({ timeoutnullErrorMessage: timeoutnullError });
        this.setState({ namenullErrorMessage: namenullError });
        this.setState({ timeoutErrorMessage: numerr });
        this.setState({ nameErrorMessage: alphabeterror });
        this.setState({ descriptionErrorMessage: alphanumerr });
        this.setState({ descriptionnullErrorMessage: descriptionnullError });
        this.setState({ jdbcconnectionErrorMessage: jdbcerr });
        this.setState({ jdbcnullErrorMessage: jdbcnullError });
        this.setState({ sqlstatementnullErrorMessage: sqlnullError });
        this.setState({ sqlstatementErrorMessage: sqlerr });
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };
    validate = () => {

        let nameError = "";
        let descriptionError = "";
        let jdbcconnectionError = "";
        let sqlstatementError = "";
        let timeoutError = "";
        if (!this.state.name) {
            nameError = "Name cannot be blank"
            this.setState({ namenullErrorMessage: nameError });
        }
        if (!this.state.description) {
            descriptionError = "Description cannot be blank"
            this.setState({ descriptionnullErrorMessage: descriptionError });
        }
        if (!this.state.sqlstatement) {
            sqlstatementError = "SQLStatement cannot be blank"
            this.setState({ sqlstatementnullErrorMessage: sqlstatementError });
        }
        if (!this.state.jdbcconnection) {
            jdbcconnectionError = "JDBCConnection cannot be blank"
            this.setState({ jdbcnullErrorMessage: jdbcconnectionError });
        }
        if (!this.state.timeout) {
            timeoutError = "Timeout cannot be blank"
            this.setState({ timeoutnullErrorMessage: timeoutError });
        }
        if (this.state.nameErrorMessage || this.state.namenullErrorMessage ||
            this.state.descriptionErrorMessage || this.state.descriptionnullErrorMessage ||
            this.state.jdbcconnectionError || this.state.jdbcnullErrorMessage ||
            this.state.sqlstatementErrorMessage || this.state.sqlstatementnullErrorMessage
            || this.state.timeoutErrorMessage || this.state.timeoutnullErrorMessage) {
            return false;
        }
        if (nameError || descriptionError || sqlstatementError || jdbcconnectionError || timeoutError) {
            return false;
        }
        return true;
    };
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
            alert("You are submitting " + this.state.name);
        }
    }
    render() {
        return (
            <MDBContainer >
                <MDBRow>
                    <MDBCol md='6'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                                width: '78rem'

                            }}
                        >
                            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                                <div className='text-center'>
                                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                        <strong>JDBCUpdate Activity </strong>
                                        <a href='#!' className='green-text font-weight-bold'>
                                            <strong>FORM</strong>
                                        </a>
                                    </h3>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <p>Name</p>
                                    <MDBInput

                                        name="name"
                                        group
                                        value={this.state.name}
                                        labelClass='white-text'
                                        validate
                                        onChange={this.handleChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>{this.state.nameErrorMessage}</div>
                                    <div style={{ fontSize: 12, color: "red" }}>{this.state.namenullErrorMessage}</div>

                                    <div><p>Description</p>
                                        <textarea refs="message" cols="40" rows="2"
                                            name="description"
                                            placeholder="description"
                                            value={this.state.description}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.descriptionnullErrorMessage}</div>
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.descriptionErrorMessage}</div>

                                    </div>
                                    <div><p>JDBCConnection</p>
                                        <MDBInput
                                            labelClass='white-text'
                                            name="jdbcconnection"
                                            placeholder="jdbcconnection"
                                            value={this.state.jdbcconnection}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.jdbcconnectionErrorMessage}</div>
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.jdbcnullErrorMessage}</div>

                                    </div>
                                    <div><p>SQLStatement</p>
                                        <MDBInput
                                            name="sqlstatement"
                                            labelClass='white-text'
                                            // onBlur={this.handleChange}

                                            value={this.state.sqlstatement}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.sqlstatementErrorMessage}</div>
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.sqlstatementnullErrorMessage}</div>
                                    </div>
                                    <div><p>Timeout</p>
                                        <MDBInput
                                            name="timeout"
                                            labelClass='white-text'
                                            value={this.state.timeout}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.timeoutErrorMessage}</div>
                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.timeoutnullErrorMessage}</div>
                                    </div>

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default Validate;
