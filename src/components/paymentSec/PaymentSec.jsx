import React, { Component } from "react";
import "./PaymentSec.scss";

export default class PaymentSec extends Component{
    state = {
        custName: "",
        cardNum: "",
        cvv: "",
        err: ""
    }
    setInputValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        if(!this.state.custName.length || !this.state.cardNum.length || !this.state.cvv.length) {
            e.preventDefault();
            this.setState({
                err: "Please fill the mandatory fields"
            })
            return;
        }
        this.props.onSubmit();
    }
    render(){
        return (
            <>
                <div className="fieldTitle"><span>Enter your name</span><span className="mandatory"> *</span></div>
                <input type="input" className="inputCls" name="custName" onChange={this.setInputValues} value={this.state.custName}/>
                <div className="fieldTitle"><span>Enter you card number</span><span className="mandatory"> *</span></div>
                <input type="input" className="inputCls" name="cardNum" onChange={this.setInputValues} value={this.state.cardNum}/>
                <div className="fieldTitle"><span>Enter cvv number</span><span className="mandatory"> *</span></div>
                <input type="input" className="inputCls" name="cvv" onChange={this.setInputValues} value={this.state.cvv}/>
                <div className="errCont"><p className="err">{this.state.err}</p></div>
                <input type="button" className="btnClass" value="Proceed" onClick={this.onSubmit}/>
            </>
        );
    }
}