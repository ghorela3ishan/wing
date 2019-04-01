import networkInstance from "./networkInstance";

class Gateway {
    constructor() {
        this.http = networkInstance;
    }

    get(path, params) {
        return this.http.get(path, {
            params
        });
    }

    post(path, data) {
        return this.http.post(path, data);
    }
}

const gatewayInstance = new Gateway(); 
export default gatewayInstance;