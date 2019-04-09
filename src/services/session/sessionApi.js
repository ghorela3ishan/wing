import gatewayInstance from "../../core/Network/gateway";

export default function sessionRequest(loginData) {
    gatewayInstance.post("/login", loginData);
}