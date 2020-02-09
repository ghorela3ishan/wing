import React from "react";
import "./PaymentSec.scss";

const PaymentSec = (props) => {
    return (
        <>
            <p>Enter your name</p>
            <input type="input" className="inputCls"/>
            <p>Enter you card number</p>
            <input type="input" className="inputCls"/>
            <p>Enter card cv number</p>
            <input type="input" className="inputCls"/>
            <input type="button" className="btnClass" value="Proceed" onClick={props.onSubmit}/>
        </>
    );
}

export default PaymentSec;